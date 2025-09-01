import { deletePlayer } from "../../repositories/playerRepository";
import { HttpResponse } from "../../utils/HttpResponse";

export const deletePlayerService = async (id: number): Promise<HttpResponse> => {

    const data = await deletePlayer(id);
    return { statusCode: data.statusCode, body: data.body }

}