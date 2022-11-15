import { Router } from "express";
import { softwareProductGetController } from "../../../controllers/techbiz/products/software.controller";

const softwareRoutes = Router();

softwareRoutes.get('/software', softwareProductGetController);

export default softwareRoutes;