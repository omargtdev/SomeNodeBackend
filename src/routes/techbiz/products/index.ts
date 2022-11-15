import { Router } from "express";
import boocampsRoutes from "./bootcamps.routes";
import hardwareRoutes from "./hardware.routes";
import softwareRoutes from "./software.routes";

const productsRoutes = Router();

productsRoutes.use(hardwareRoutes);
productsRoutes.use(boocampsRoutes);
productsRoutes.use(softwareRoutes);

export default productsRoutes;