import mongoose, { Schema } from "mongoose";

const personSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      index: true,
    },
    photo: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    team: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
      enum: ["teacher", "jc", "sc"],
    },
  },
  { timestamps: true }
);

export const Person = mongoose.model("Person", personSchema);
