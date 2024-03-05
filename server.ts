import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is Live.");
});

app.listen(port, () => {
  console.log(`server is listening on port 8000`);
});
