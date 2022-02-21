import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import config from './config';
import search from './database/search';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/search', (req: Request, res: Response) => {
  const { term } = req.body;

  const results = search(term);

  res.status(200).send({ data: results });
});

// eslint-disable-next-line no-unused-vars
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'Response from server' });
});

app.listen(config.PORT, () => {
  // do stuff
  console.log(`Server is listening on port ${config.PORT}!`);
});
