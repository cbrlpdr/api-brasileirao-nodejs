import express, {json, Request, Response} from "express"
import { initApp } from "./app"

const app = initApp();
const port = process.env.port

app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`)
})
