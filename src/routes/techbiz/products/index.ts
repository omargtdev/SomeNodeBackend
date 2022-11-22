import { Router } from "express";
import { productsGetController } from "../../../controllers/techbiz/products/controller";
import categoriesRoutes from "./categories.routes";

const productsRoutes = Router();

productsRoutes.use(categoriesRoutes);

productsRoutes.get('/', productsGetController);

export default productsRoutes;