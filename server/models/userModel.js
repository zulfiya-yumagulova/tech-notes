import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    requered: true,
  },
});

export const User = mongoose.model("User", userSchema);
