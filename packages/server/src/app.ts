import express from "express";
import router from "./routes";
import { corsMiddleware } from "./middlewares/cors";

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use("/api", router);

export default app;
