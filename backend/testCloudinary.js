require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY ? "Loaded" : "Missing");
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing");

async function testCloudinary() {
    try {
        const result = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/sample.jpg',
            {
                folder: 'uploads'
            }
        );

        console.log("\nCloudinary upload successful!");
        console.log("Image URL:", result.secure_url);

    } catch (error) {
        console.log("\nCloudinary upload failed!");
        console.log("Error message:", error.message);
        console.log("HTTP status:", error.http_code);
    }
}

testCloudinary();