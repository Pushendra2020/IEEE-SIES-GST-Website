import mongoose from "mongoose";
import { Event } from "../models/events.model.js";
import {uplodOnCloudinary,deleteFromCloudinary} from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

const createEvent = async (req, res) => {
  const { eventName, eventDescription, eventLink, eventType, eventState } =
    req.body;

  if (
    [eventName, eventDescription, eventLink, eventType, eventState].some(
      (field) => field?.trim() === ""
    )
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const PhotoLocalPath = req.files?.eventImage[0]?.path;

  if (!PhotoLocalPath) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const eventImage = await uplodOnCloudinary(PhotoLocalPath);

  if (!eventImage) {
    return res.status(400).json({ message: "photo is require" });
  }

  const event = await Event.create({
    eventName,
    eventDescription,
    eventImage: {
      url: eventImage.secure_url,
      public_id: eventImage.public_id,
    },
    eventLink,
    eventType,
    eventState,
  });

  const eventCreated = await Event.findById(event._id);

  console.log("personCreated : ", eventCreated);
  if (!eventCreated) {
    return res
      .status(500)
      .json({ message: "Failed to store user in database" });
  }

  return res.status(201).json({
    message: "User created Successfully",
    data: eventCreated,
  });
};

const updateEvent = async (req, res) => {
  try {
    const PhotoLocalPath = req.file?.path;
    const {
      _id,
      eventName,
      eventDescription,
      eventLink,
      eventType,
      eventState,
    } = req.body;
    if (
      [eventName, eventDescription, eventLink, eventType, eventState].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!_id) {
      return res.status(405).json({ message: "Some issue with the ID" });
    }

    const existingEvent = await Event.findById(_id);
    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    let photoData = {
      url: existingEvent.eventImage?.url,
      public_id: existingEvent.eventImage?.public_id,
    };

    if (PhotoLocalPath) {
      if (photoData.public_id) {
        await cloudinary.uploader.destroy(photoData.public_id);
      }

      const uploaded = await uplodOnCloudinary(PhotoLocalPath);
      if (!uploaded) {
        return res
          .status(400)
          .json({ message: "Event Image is upload failed" });
      }

      photoData = {
        url: uploaded.secure_url,
        public_id: uploaded.public_id,
      };
    }

    const event = await Event.findByIdAndUpdate(
      _id,
      {
        $set: {
          eventName,
          eventDescription,
          eventLink,
          eventType,
          eventState,
          eventImage: photoData,
        },
      },
      { new: true }
    );

    if (!event) {
      return res.status(500).json({ message: "Failed to update the Info" });
    }
console.log(event);

    return res.status(200).json({
      message: "Event is Updated",
      data: event,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const existingEvent = await Event.findById(id);
    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    console.log("Event found, proceeding to delete image from Cloudinary");

    if (existingEvent.eventImage && existingEvent.eventImage.public_id) {
      try {
        const result = await cloudinary.api.delete_resources([existingEvent.eventImage.public_id]);
        console.log("Cloudinary destroy result:", result);

        if (result.deleted && result.deleted[existingEvent.eventImage.public_id] === 'deleted') {
          console.log("Image successfully deleted from Cloudinary");
        } else {
          console.log("Image might not have been deleted from Cloudinary:", result);
        }
      } catch (cloudinaryError) {
        console.error("Error deleting from Cloudinary:", cloudinaryError);
         return res.status(500).json({ message: "Failed to delete the image from Cloudinary" });

      }
    } else {
      console.log("No image public_id found for this event");
    }

    console.log("Proceeding to delete from database");

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(500).json({ message: "Failed to delete the event from database" });
    }

    console.log("Event successfully deleted:", deletedEvent);

    return res.status(200).json({
      message: "Event deleted successfully",
      data: deletedEvent
    });

  } catch (error) {
    console.error("Error in deleteEvent:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Event.find();

    if (!event || event.length === 0) {
      return res.status(404).json({ message: "No Event found" });
    }

    return res.status(200).json({
      count: event.length,
      data: event
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getEventID = async(req,res) => {
  try {
    const id =  req.params.id
const event = await Event.findById(id)
if(!event){
return res.status(404).json({ message: "Event not found" });
}

return res.status(200).json({
      data: event
    });

  } catch (error) {
     console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export { createEvent,updateEvent,deleteEvent,getEvent,getEventID };
