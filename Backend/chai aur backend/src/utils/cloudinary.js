import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    });

    //   file has been uploade successfully
    // console.log("file is upload in cloudinary", response.url);
    // if file upload successfully then unlink file form localPath
    // console.log(response)
    fs.unlinkSync(localFilePath)
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally save temporary file as the upload opration got failed
    return null;
  }
};

export { uploadOnCloudinary };
