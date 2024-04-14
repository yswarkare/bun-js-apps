import express, { type Request, type Response } from "express";

const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World 3!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});