export interface HttpResponse{
    statusCode: number,
    body: any
}

export const createHttpResponse = (data: any): HttpResponse => {
    if(data) return { statusCode: 200, body: data}
    else return { statusCode: 404, body: "No content found"}
}