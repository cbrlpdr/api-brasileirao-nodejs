import express, { json, Request, Response } from "express"
import { getAllPlayers } from "./controllers/playerController";
import { router } from "./routes/routes";

export const initApp = () => {
    const app = express();
    app.use(json());
    app.use("/api", router);
    return app;
}
