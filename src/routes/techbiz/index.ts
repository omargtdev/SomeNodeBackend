import { Router } from "express";
import categoriesRoutes from "./categories.routes";
import productsRoutes from "./products";
import sliderRoutes from "./sliders.routes";

const routes = Router();

routes.use(sliderRoutes);
routes.use(categoriesRoutes)
routes.use('/products', productsRoutes);

export default routes;
