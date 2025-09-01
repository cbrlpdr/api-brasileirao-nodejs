import { Router } from "express";
import { deletePlayer, getAllPlayers, getPlayerByID, postPlayer, updatePlayer } from "../controllers/playerController";
import { getAllClubs, getClubByID } from "../controllers/clubController";

export const router = Router();

// PLAYER ROUTES ------------------------------------
router.get("/players", getAllPlayers)
router.get("/players/:id", getPlayerByID)

router.post("/players", postPlayer)

router.delete("/players/:id", deletePlayer)

router.put("/players/:id", updatePlayer)



// CLUB ROUTES ------------------------------------
router.get("/clubs", getAllClubs);
router.get("/clubs/:id", getClubByID);