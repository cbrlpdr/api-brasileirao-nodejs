import { PlayerModel } from "../../models/playerModel";
import { updatePlayerByID } from "../../repositories/playerRepository";

export const updatePlayerService = async (id: number, player: PlayerModel) => {
    const data = await updatePlayerByID(id, player);
    return {statusCode: data.statusCode, body: data.body}
}