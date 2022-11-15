import { Router } from "express";
import { bootcampsProductGetController } from "../../../controllers/techbiz/products/bootcamps.controller";

const boocampsRoutes = Router();

boocampsRoutes.get('/bootcamps', bootcampsProductGetController);

export default boocampsRoutes;