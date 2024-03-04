import mongoose from "mongoose";
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);

export const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNumbers",
  start_seq: 500,
});

export const Note = mongoose.model("Note", noteSchema);
