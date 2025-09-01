import { request, Request, Response } from "express"
import { getAllPlayersService } from "../services/players/getAllPlayersService";
import { getPlayerService } from "../services/players/getPlayerService";
import { createPlayerService } from "../services/players/createPlayerService";
import { deletePlayerService } from "../services/players/deletePlayerService";
import { updatePlayerService } from "../services/players/updatePlayerService";

export const getAllPlayers = async (request: Request, response: Response) => {
    const data = await getAllPlayersService();
    response.status(data.statusCode).json(data.body);
    }

export const getPlayerByID = async (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const data = await getPlayerService(id);
    response.status(data.statusCode).json(data.body);
}

export const postPlayer = async (request: Request, response: Response) => {
    const bodyContent = request.body;
    const httpResponse = await createPlayerService(bodyContent);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayer = async (request: Request, response: Response) => {
    const httpResponse = await deletePlayerService(Number(request.params.id));
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (request: Request, response: Response) => {
    const bodyContent = request.body;
    console.log(bodyContent)
    const httpResponse = await updatePlayerService(Number(request.params.id), bodyContent);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}