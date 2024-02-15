import { asyncHandler } from "../utils/asyncHandler.js";
// import apierror form utils
import { ApiError } from "../utils/ApiError.js";
// import User model form models
import { User } from "../models/user.model.js";
// import cloudinary from utils
import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import ApiResponse from utils
import { ApiResponce } from "../utils/ApiResponce.js";

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
  const userExist = User.findOne({
    $or: [{ username }, { fullName }],
  });

  if (userExist) {
    throw new ApiError(409, "user with email and username already exist :)");
  }

  // check for image multer. give req. file
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

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

export { registerUser };
