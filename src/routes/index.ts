import { Router } from "express";
import techbizRoutes from './techbiz'
import loginRoutes from './login.routes'

const routes = Router();

routes.use(loginRoutes);
routes.use('/techbiz', techbizRoutes);

// Home backend page
routes.get('/', (req, res) => {
    res.send('Holi');
    res.end();
});

export default routes;