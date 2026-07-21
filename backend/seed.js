const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@Bazario.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 1299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 600.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 11999.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 899.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89
      },
      {
        name: 'Leather Crossbody Bag',
        description: 'Sleek and durable leather bag with adjustable straps, perfect for daily essentials.',
        price: 1099.00,
        category: 'Clothing',
        stock: 25,
        imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
        ratings: 4.7,
        numReviews: 42
     },
    {
        name: 'Minimalist Chronograph Watch',
        description: 'A timeless timepiece featuring a stainless steel case and a genuine leather band.',
        price: 1200.00,
        category: 'Clothing',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ratings: 4.8,
        numReviews: 112
     },
    {
       name: 'Oversized Denim Jacket',
       description: 'Classic vintage-washed denim jacket with a relaxed fit and button closures.',
       price: 899.50,
       category: 'Clothing',
       stock: 60,
       imageUrl: 'https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGplYW5zfGVufDB8fDB8fHww',
       ratings: 4.4,
       numReviews: 67
    },
   {
      name: 'Running Knit Sneakers',
      description: 'Lightweight, breathable mesh upper with a responsive cushioned sole for peak performance.',
      price: 1299.00,
      category: 'Clothing',
      stock: 38,
      imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      ratings: 4.6,
      numReviews: 145
    },{
      name: 'Classic Aviator Sunglasses',
    description: 'Polarized lenses with a sleek metal frame, offering timeless style and UV protection.',
    price: 399.00,
    category: 'Clothing',
    stock: 80,
    imageUrl: 'https://media.istockphoto.com/id/1403005009/photo/aviator-sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=BznlPMevoeGbLA4Hpa8DSJpvYgOoF68680dUPXgE4JM=',
    ratings: 4.3,
    numReviews: 54
    },
    {
       name: 'Cotton Crewneck Sweatshirt',
    description: 'Ultra-soft fleece lining with a ribbed collar and cuffs for everyday casual comfort.',
    price: 500.00,
    category: 'Clothing',
    stock: 120,
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q290dG9uJTIwQ3Jld25lY2slMjBTd2VhdHNoaXJ0fGVufDB8fDB8fHww',
    ratings: 4.5,
    numReviews: 210
    },{
      name: 'Canvas Weekender Duffel',
    description: 'Spacious travel bag featuring heavy-duty canvas, leather accents, and a shoe compartment.',
    price: 799.00,
    category: 'Clothing',
    stock: 18,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679314407939-858a78e9e1ac?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ratings: 4.8,
    numReviews: 33
    },
    {
      name: 'Waterproof Hooded Raincoat',
    description: 'Lightweight, windproof shell with an adjustable drawcord hood and deep zip pockets.',
    price: 135.00,
    category: 'Clothing',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1721745848080-3ed6f21e7ba8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFdhdGVycHJvb2YlMjBIb29kZWQlMjBSYWluY29hdHxlbnwwfHwwfHx8MA%3D%3D',
    ratings: 4.6,
    numReviews: 72
    }

    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
