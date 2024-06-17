import express from 'express'
import morgan from 'morgan'
import rootRouter from './root-routes'
import { configApp } from './common/configs/index'

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', rootRouter);

const PORT = configApp.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 