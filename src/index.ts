import express from 'express';
const dataController = require('./controllers');

const app = express();

app.get('/', (req: any, res: any) => {
    dataController.getData(req, res)
});

app.put('/', (req: any, res: any)  => {
    dataController.addData(req, res)
});

app.listen(8000, () =>
  console.log(`Example app listening on port 8000!`),
);