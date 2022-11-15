import { Router } from "express";
import { hardwareProductGetController } from "../../../controllers/techbiz/products/hardware.controller";

const hardwareRoutes = Router();

hardwareRoutes.get('/hardware', hardwareProductGetController);

export default hardwareRoutes;