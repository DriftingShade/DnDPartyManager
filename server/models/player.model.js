import { model, Schema } from "mongoose";

const playerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [20, "Name must be less than 20 characters long"],
  },
  class: {
    type: String,
    required: [true, "Class is required"],
    minlength: [2, "Class must be at least 2 characters long"],
    maxlength: [20, "Class must be less than 20 characters long"],
  },
  race: {
    type: String,
    required: [true, "Race is required"],
    minlength: [2, "Race must be at least 2 characters long"],
    maxlength: [30, "Race must be less than 30 characters long"],
  },
  level: {
    type: Number,
    required: [true, "Level is required"],
    min: [1, "Level must be at least 1"],
    max: [20, "Level must be less than 20"],
  },
});

const Player = model("Player", playerSchema);

export default Player;
