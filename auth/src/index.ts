import express from 'express'
import morgan from 'morgan'
import rootRouter from './root-routes'
import { configApp } from './common/configs/index'
import { globalErrorHanlder }from './common/helpers/index'

const app = express();
const PORT = configApp.port;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', rootRouter);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(globalErrorHanlder);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 