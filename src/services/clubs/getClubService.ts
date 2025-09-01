import { findClubByID } from "../../repositories/clubRepository";
import { HttpResponse } from "../../utils/HttpResponse";

export const getClubService = async (id: number): Promise<HttpResponse> => {
    const club = findClubByID(id);
    if (club) return {statusCode: 200, body: club};
    return {statusCode: 404, body: {message: "Not found"}}    
}