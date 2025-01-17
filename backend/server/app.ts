import express from "express";
import { tRPCExpressMiddleware } from "@fungi/api";

const app = express();

app.use("/trpc", tRPCExpressMiddleware);

app.listen(3000, () => console.log("Listening"));
