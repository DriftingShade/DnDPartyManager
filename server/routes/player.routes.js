import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayer,
  updatePlayer,
} from "../controllers/player.controller.js";

const router = Router();

router.route("/players").get(getAllPlayers).post(createPlayer);

router
  .route("/players/:id")
  .get(getPlayer)
  .put(updatePlayer)
  .delete(deletePlayer);

export default router;
