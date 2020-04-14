const cloudinary = require('cloudinary');

const storage = ({stream}, isVideo = false) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    // { image: información } fregf459fi34f9430ir
    return new Promise((resolve, reject) => {
        const options = isVideo ? { resource_type: 'video' } : {};
        const buffer = cloudinary.v2.uploader.upload_stream( options, (err, result) => {
            if(err) reject(err);
            resolve(result);
        });
        stream.pipe(buffer);
    });
};

const uploadFile = async (file, isVideo = false) => {
    const { createReadStream } = await file;
    const stream = createReadStream();
    const storageInfo = await storage({ stream }, isVideo);
    console.log( 'Storage info', storageInfo);
    return storageInfo.secure_url;
};

module.exports = {
    storage,
    uploadFile,
};