import mongoose, { Schema } from "mongoose";

const eventSchema = Schema(
  {
    eventName: {
      type: String,
      require: true,
      trim: true,
    },
    eventImage: {
     url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    eventDescription: {
      type: String,
      require: true,
    },
    eventLink: {
      type: String,
      require: true,
    },
    eventType:{
       type: String,
      require: true,
      enum:['current','previous','upcoming']
    },
    eventState:{
       type: String,
      require: true,
      enum:['current','previous','upcoming','none']
    }
  },
  { timestamps: true }
);


export const Event = mongoose.model("Event",eventSchema)