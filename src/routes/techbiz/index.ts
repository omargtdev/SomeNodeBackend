import { Router } from "express";
import sliderRoutes from "./slider.routes";

const routes = Router();

routes.use(sliderRoutes);

export default routes;
