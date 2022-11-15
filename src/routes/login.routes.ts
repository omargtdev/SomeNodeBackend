import { Router } from 'express';
import { loginPostController } from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post('/login', loginPostController)

export default loginRoutes;