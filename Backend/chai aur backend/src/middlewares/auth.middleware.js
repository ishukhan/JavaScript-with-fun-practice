import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

      // console.log("Verify token ", token)
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    // if token available verify using jwt
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("decodedToken ",decodedToken);
    
    // find the user
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    // console.log("user ",user);

    if (!user) {
      //discuss about forntend
      throw new ApiError(401, "Invalid access Token :)");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token :)");
  }
});
