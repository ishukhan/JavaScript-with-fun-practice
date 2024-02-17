import { asyncHandler } from "../utils/asyncHandler.js";
// import apierror form utils
import { ApiError } from "../utils/ApiError.js";
// import User model form models
import { User } from "../models/user.model.js";
// import cloudinary from utils
import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import ApiResponse from utils
import { ApiResponce } from "../utils/ApiResponce.js";
import jwt, { decode } from "jsonwebtoken";

// create a methode for genrateAndRefreshAccessToken ;
const genrateRefereshAndAccessToken = async (userId) => {
  try {
    // find user by passing userId
    const user = await User.findOne(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // add refreshToken in db
    user.refreshToken = refreshToken;
    // save refreshToken in db
    await user.save({ validateBeforeSave: false });
    //return both accessToken and refreshToken
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access Token :)"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //get user detail from frontend
  //validation - not empty
  //check if user already exist: username, email
  //check for image, check avatar
  //upload them to cloudinary, avatar
  //create user object - create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return response

  const { fullName, email, username, password } = req.body;
  // console.log("req.Body ",req.body)
  // console.log("email: ",email)
  // this way is throw err all filed check using if else
  // if(fullName === ""){
  //   throw new ApiError(400,"fullName required :)")
  // }

  // second way throw err using some( function)
  if (
    [fullName, email, username, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields is required :)");
  }

  // check if username and email already exist
  const userExist = await User.findOne({
    $or: [{ username }, { fullName }],
  });

  if (userExist) {
    throw new ApiError(409, "user with email and username already exist :)");
  }

  // check for image multer. give req. file
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;  //this optional chaining doesnt check  that why use clasic if else
  // if you do optional chaining without check if they give error
  // do  clasic if else check
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  // console.log("req.files ",req.files)
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required :)");
  }

  //  upload image on cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required :)");
  }

  // create object in db
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "", //coverImage not compulsury add check in this line if exit or not for safty major
    email,
    password,
    username: username.toLowerCase(),
  });

  // what if userDoesnt create in db there is way to check user create or not using findById
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); //what if i dont want to include or exclude some specific field using seclect methode

  // check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Somthing went worng while registring the user :)");
  }

  // all work done for registering user after this retrurn the user response
  return res
    .status(201)
    .json(new ApiResponce(200, createdUser, "User register Successfully"));
});

// USER LOGIN

const loginUser = asyncHandler(async (req, res) => {
  //req.body -> data
  //usernama or email
  //find the user
  //password check
  //accessToken and refreshToken
  //send cookie
  //retrun res

  // get data form req.body
  const { username, email, password } = req.body;

  // check condition
  if (!(username || email)) {
    throw new ApiError(400, "username and email is required :)");
  }

  // find any one thing available in db like username or email
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  // check if user does not create
  if (!user) {
    throw new ApiError(404, "User does not Exist :)");
  }

  // check password correct or not
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Password Incorrect :)");
  }

  // accessToken and refreshToken
  const { accessToken, refreshToken } = await genrateRefereshAndAccessToken(
    user._id
  );

  // optional. if you dont want to show password and refreshToken user
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // wheneve you send cookies designed a option object
  const options = {
    httpOnly: true,
    secure: true,
  };

  // return the response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponce(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully."
      )
    );
});

// user logout
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, //this remove the field from documnet
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponce(200, { User }, "User Logged out"));
});

//  this end point is user get refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
  // first get refreshToken
  const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    //  verfiry the token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    console.log("decodedToken ", decodedToken);

    //  call db and access id
    const user = await User.findById(decodedToken?._id);

    // if user does not have
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }
    // check if incomingRefreshToken and in user refresh token doesnt mathc
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired and used");
    }

    // genreateRefreshToken

    const { accessToken, newRefreshToken } =
      await genrateRefereshAndAccessToken(user._id);

    // send in cookie
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponce(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
