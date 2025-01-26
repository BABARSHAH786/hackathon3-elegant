// import { createClient } from '@sanity/client';


// const client = createClient({
//   projectId: 'your_project_id', // Replace with your Sanity project ID
//   dataset: 'production', // Replace with your dataset name
//   useCdn: false,
//   token: 'your_sanity_token', // Replace with your Sanity API token
// });


// export default client;
// // Create an API Route to Insert Data: In pages/api/fetch-and-insert.js:
// import axios from 'axios';
// import client from '../../sanityClient';


// export default async function handler(req, res) {
//   try {
//     // Fetch data from the API
//     const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');


//     // Insert each product into Sanity
//     for (const product of data) {
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
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch or insert data' });
//   }
// }




// GEMINI
import { createClient } from '@sanity/client';
import axios from 'axios';

// Sanity Client Configuration
const client = createClient({
  projectId: 'your_project_id', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset name
  useCdn: false, 
  token: 'your_sanity_token', // Replace with your actual API token
});

// API Route for Data Insertion
export default async function handler(req, res) {
  try {
    // Fetch data from the API
    const response = await axios.get('https://template-0-beta.vercel.app/api/product'); 
    const products = response.data; 

    // Insert each product into Sanity
    for (const product of products) {
      await client.create({
        _type: 'product', 
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price), 
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }

    res.status(200).json({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error('Error:', error); 
    res.status(500).json({ error: 'Failed to fetch or insert data' });
  }
}