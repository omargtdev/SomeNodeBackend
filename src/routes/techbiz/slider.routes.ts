import { Router } from 'express';
import { sliderGetController } from '../../controllers/techbiz/slider.controller';

const sliderRoutes = Router();

sliderRoutes.get('/slider', sliderGetController);

export default sliderRoutes;