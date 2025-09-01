import { findPlayerByID } from "../../repositories/playerRepository";
import { createHttpResponse, HttpResponse } from "../../utils/HttpResponse";

export const getPlayerService = async (id: number): Promise<HttpResponse> => {
    const data = await findPlayerByID(id)
    return createHttpResponse(data);
}