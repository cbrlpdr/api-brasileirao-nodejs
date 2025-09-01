import { Request, Response } from "express";
import { getAllClubsService } from "../services/clubs/getAllClubsService";
import { getClubService } from "../services/clubs/getClubService";

export const getAllClubs = async (request: Request, response: Response) => {
    const data = await getAllClubsService();
    response.status(data.statusCode).json(data.body);
}

export const getClubByID = async (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const data = await getClubService(id);
    response.status(data.statusCode).json(data.body);
}