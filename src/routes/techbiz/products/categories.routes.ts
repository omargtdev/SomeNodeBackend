import { Router } from 'express';
import { categoriesGetController, productsCategoryByIdGetController } from '../../../controllers/techbiz/products/categories.controller';

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', categoriesGetController);
categoriesRoutes.get('/categories/:id', productsCategoryByIdGetController);

export default categoriesRoutes;