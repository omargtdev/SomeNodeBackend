import { config } from 'dotenv';

import app from './app'

config();

app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
