import express, { json, Request, Response } from "express"
import { getAllPlayers } from "./controllers/playerController";
import { router } from "./routes/routes";
import cors from "cors"

export const initApp = () => {
    const app = express();
    app.use(json());
    app.use("/api", router);
    app.use(cors())
    return app;
}
