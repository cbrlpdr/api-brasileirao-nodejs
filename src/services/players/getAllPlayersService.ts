import { findAllPlayers } from "../../repositories/playerRepository"
import { createHttpResponse, HttpResponse } from "../../utils/HttpResponse";

export const getAllPlayersService = async (): Promise<HttpResponse> => {
    const data = await findAllPlayers();
    return createHttpResponse(data);
}