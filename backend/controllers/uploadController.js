const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadPhoto = async (req, res) => {
  try {
    if (!req.files || !req.files.photo) {
      return res.status(400).json({ message: 'No photo uploaded' });
    }
    const result = await cloudinary.uploader.upload(req.files.photo.tempFilePath, {
      folder: 'listings',
    });
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed' });
  }
};