import { PlayerModel } from "../../models/playerModel";
import { insertPlayer } from "../../repositories/playerRepository";
import { createHttpResponse, HttpResponse } from "../../utils/HttpResponse";

export const createPlayerService = async (player: PlayerModel): Promise<HttpResponse> => {
    if (!player) return { statusCode: 400, body: "Bad request" }
    else {
        insertPlayer(player);
        return { statusCode: 200, body: player }
    }

}