const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const productsFilePath = path.join(__dirname, 'data', 'products.js');

// Load original products array
const products = require(productsFilePath);

async function uploadImages() {
  console.log('Starting Cloudinary image upload process...');
  
  // Keep a map of original URL -> new Cloudinary URL to avoid duplicate uploads
  const urlMap = new Map();
  let totalUploaded = 0;
  let totalSaved = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`Processing product ${i + 1}/${products.length}: "${product.name}"`);
    
    if (product.images && Array.isArray(product.images)) {
      for (let j = 0; j < product.images.length; j++) {
        const imgObj = product.images[j];
        const originalUrl = imgObj.url;
        
        // Skip if already optimized or invalid
        if (!originalUrl || originalUrl.includes('res.cloudinary.com')) {
          continue;
        }

        // If we have already uploaded this exact URL, reuse it
        if (urlMap.has(originalUrl)) {
          imgObj.url = urlMap.get(originalUrl);
          totalSaved++;
          continue;
        }

        try {
          console.log(`  Uploading image ${j + 1}: ${originalUrl}`);
          const uploadResult = await cloudinary.uploader.upload(originalUrl, {
            folder: 'Home',
            quality: 'auto',
            fetch_format: 'auto',
          });
          
          const newUrl = uploadResult.secure_url;
          urlMap.set(originalUrl, newUrl);
          imgObj.url = newUrl;
          totalUploaded++;
          console.log(`  Successfully uploaded. New URL: ${newUrl}`);
        } catch (error) {
          console.error(`  Failed to upload image ${originalUrl}:`, error.message);
        }
      }
    }
  }

  console.log(`\nUpload complete!`);
  console.log(`Uploaded new images to Cloudinary: ${totalUploaded}`);
  console.log(`Reused already uploaded images: ${totalSaved}`);

  // Now, rewrite the products.js file
  // Since require() parses it as an object, let's write it back in a clean JS file format.
  const fileContent = `// product.js (Automatically updated by Cloudinary Uploader script)

const products = ${JSON.stringify(products, null, 2)};

module.exports = products;
`;

  fs.writeFileSync(productsFilePath, fileContent, 'utf-8');
  console.log(`Successfully updated ${productsFilePath}`);
}

uploadImages().catch(err => {
  console.error('An error occurred during upload:', err);
});
