import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/product.controller.js";


const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router