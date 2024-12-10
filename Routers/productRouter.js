import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/productControllers.js";

const router = express.Router();

router.get("/getdata", getProducts);
router.get("/getdata/:id", getProductById);

router.post("/create", createProduct);

router.put("/update/:id", updateProduct);

router.delete("/delete/:id",deleteProduct);

export default router;
