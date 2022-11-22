import { Router } from "express";
import productsRoutes from "./products";
import sliderRoutes from "./sliders.routes";

const routes = Router();

routes.use(sliderRoutes);
routes.use('/products', productsRoutes);

export default routes;
