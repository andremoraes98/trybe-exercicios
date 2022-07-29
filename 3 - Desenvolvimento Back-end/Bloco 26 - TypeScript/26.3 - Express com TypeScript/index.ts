import express, { NextFunction, Request, Response} from 'express';
import 'express-async-errors';
import userRoutes from './routes/user.routes'

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});