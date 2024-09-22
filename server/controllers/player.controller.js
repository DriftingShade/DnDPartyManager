import Player from "../models/player.model.js";

async function createPlayer(req, res) {
  try {
    const newPlayer = await Player.create(req.body);
    res.json(newPlayer);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllPlayers(req, res) {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getPlayer(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updatePlayer(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedPlayer);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deletePlayer(req, res) {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    res.json(deletedPlayer);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { createPlayer, getAllPlayers, getPlayer, updatePlayer, deletePlayer };
