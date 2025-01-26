// 





// import { createClient } from '@sanity/client';
// import axios from 'axios';

// // Sanity Client Configuration
// const client = createClient({
//   projectId: 'your_project_id', // Replace with your actual project ID
//   dataset: 'production', // Replace with your actual dataset name
//   useCdn: false, 
//   token: 'your_sanity_token', // Replace with your actual API token
// });

// // API Route for Data Insertion
// export default async function handler(req, res) {
//   try {
//     // Fetch data from the API
//     const response = await axios.get('https://template-0-beta.vercel.app/api/product'); 
//     const products = response.data; 

//     // Insert each product into Sanity
//     for (const product of products) {
//       await client.create({
//         _type: 'product', 
//         id: product.id,
//         name: product.name,
//         imagePath: product.imagePath,
//         price: parseFloat(product.price), 
//         description: product.description,
//         discountPercentage: product.discountPercentage,
//         isFeaturedProduct: product.isFeaturedProduct,
//         stockLevel: product.stockLevel,
//         category: product.category,
//       });
//     }

//     res.status(200).json({ message: 'Data inserted successfully!' });
//   } catch (error) {
//     console.error('Error:', error); 
//     res.status(500).json({ error: 'Failed to fetch or insert data' });
//   }
// }



import { createClient } from '@sanity/client';
import fetch from 'node-fetch';

// Initialize Sanity client
const client = createClient({
  projectId: "mt04gv4h",
  dataset: "production",
  useCdn: false, // Set to true if you want faster reads
  apiVersion: '2025-01-13',
  token: "skXDtkNB9rDcmgjeq3Gfp1mTNqCqexPGViyFsoEGp2z2bT8TB4EyauK3sbasdjOLRQ4bUaBiKTWn8RYM0n1Ii09MNFdEDeIPIXPzwgGDrXKlBXXFpuhnKl18JSOlUUUy6GwLmQcEQiWkW1ZboxqUjGcWzEVXHGWKHOBl2X4j8WkN0fVlr2ZE", // Replace with your Sanity token
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: 'product',
        id: product.id,
        name: product.name,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price), // Ensure the price is a number
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start the migration
migrateProducts();