import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
const uploadOnCloudinary =async (filePath)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    try{
        const uploadResult = await cloudinary.uploader
       .upload(filePath)
       fs.unlinkSync(filePath); // Delete the local file after successful upload
       return uploadResult.secure_url;
    }catch(error){
        fs.unlinkSync(filePath); // Delete the local file even if upload fails
        return resq.status(500).json({ message: "Cloudinary upload failed" });
    }
}
export default uploadOnCloudinary;