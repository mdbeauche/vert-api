import express, { Application, Request, Response, NextFunction } from 'express';
import { config } from './config';

const app: Application = express();

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Response from server' });
});

app.listen(config.PORT, () => {
  // do stuff
  console.log(`Server is listening on port ${config.PORT}!`);
});
