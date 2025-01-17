import express from "express";
import {
    createCategory,
    getCategories,
    deleteCategory,
    getCategoryById,
} from "../Controllers/category.controller.js";
import { authentication } from "../Middlewares/auth.middleware.js";
import { VerifyCategory } from "../Services/categoryValidation.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getCategories);
categoryRouter.route('/:id').get(getCategoryById)

categoryRouter.use(authentication);
categoryRouter.route("/create-category").post(VerifyCategory, createCategory);
categoryRouter.route("/:id").delete(deleteCategory);
export default categoryRouter;
