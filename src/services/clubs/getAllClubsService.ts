import { returnAllClubs } from "../../repositories/clubRepository";
import { HttpResponse } from "../../utils/HttpResponse";

export const getAllClubsService = ():HttpResponse => {
    const data = returnAllClubs();
    return {statusCode: 200, body: data}    
}