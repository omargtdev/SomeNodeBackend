import { Router } from 'express';
import { slidersGetController } from '../../controllers/techbiz/sliders.controller';

const slidersRoutes = Router();

slidersRoutes.get('/sliders', slidersGetController);

export default slidersRoutes;