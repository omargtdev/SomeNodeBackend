import { Router } from 'express';
import { categoriesGetController } from '../../controllers/techbiz/categories.controller';

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', categoriesGetController);

export default categoriesRoutes;