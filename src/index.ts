import { configDotenv } from "dotenv";
import express, { Express, Request, Response } from "express";
import { Solution } from "./solution";

configDotenv();

const app: Express = express();
const port = process.env.PORT || 3000;

const solution = new Solution();

app.get("/", (req: Request, res: Response) => {
  res.send(`hello`);
});

app.get("/api", (req: Request, res: Response) => {
  const input = req.query.data as string;
  const decodedInput = input.split(",");
  const result = solution.run(decodedInput);
  res.send(`pairs count : ${result}`);
});

app.listen(port, () => {
  console.log(`Server is running at localhost: ${port}`);
});
