import express, { NextFunction, Request, Response} from 'express';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});