import Product from '../Models/Products.js';
import mongoose from 'mongoose';

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
        
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};


export const createProducts =  async (req,res) => {
    const product = req.body; // user will send this to us

    if(!product.name || !product.image || !product.price){
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, data : newProduct});
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
};

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Invalid Product id"});
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product Delted"});
    } catch (error) {
        console.error("Error in deleting product:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
    console.log(`Product with ${id} has been deleted:`);

};


export const updateProduct = async (req,res) => {

    const {id} = req.params;

    const product = req.body;

    //check if product id is present or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({success:false, message: "Invalid Product id"});
    }

    try {
        const UpdatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success:true, data : UpdatedProduct });
        
    } catch (error) {
        console.log("Nahi Milli");
        res.status(500).json({success:false, message : " Server Error : Id is not found hence not updated"});
        
    }
};