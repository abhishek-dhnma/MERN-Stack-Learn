import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},{
    timestamps: true // createdAt, updatedAt
});

const Products = mongoose.model('Product', productsSchema);

export default Products;

