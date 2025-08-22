import mongoose from "mongoose";
import { Person } from "../models/person.model.js";
//import { upload } from "../middleware/multer.middleware.js";
import {uplodOnCloudinary} from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

const createPerson = async (req, res) => {
  const { name, role,team } = req.body;

  if (!(name && role && team)) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const PhotoLocalPath = req.files?.photo[0]?.path;

  if (!PhotoLocalPath) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const photo = await uplodOnCloudinary(PhotoLocalPath);

  if (!photo) {
    return res.status(400).json({ message: "photo is require" });
  }

  const person = await Person.create({
    name,
    role,
    team,
    photo: {
      url: photo.secure_url,
      public_id: photo.public_id,
    },
  });

  const personCreated = await Person.findById(person._id);

  console.log("personCreated : ", personCreated);
  if (!personCreated) {
    return res
      .status(500)
      .json({ message: "Failed to store user in database" });
  }

  return res.status(201).json({
    message: "User created Successfully",
    data: personCreated,
  });
};

const updatePerson = async (req, res) => {
  try {
    const PhotoLocalPath = req.file?.path;
    const { _id, name, role,team } = req.body;

    if (!(name && role && team)) {
      return res
        .status(400)
        .json({ message: "name and role fields are required" });
    }

    if (!_id) {
      return res.status(405).json({ message: "Some issue with the ID" });
    }

    const existingPerson = await Person.findById(_id);
    if (!existingPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    let photoData = {
      url: existingPerson.photo?.url,
      public_id: existingPerson.photo?.public_id,
    };

    if (PhotoLocalPath) {
      if (photoData.public_id) {
        await cloudinary.uploader.destroy(photoData.public_id);
      }

      const uploaded = await uplodOnCloudinary(PhotoLocalPath);
      if (!uploaded) {
        return res.status(400).json({ message: "Photo upload failed" });
      }

      photoData = {
        url: uploaded.secure_url,
        public_id: uploaded.public_id,
      };
    }

    const person = await Person.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          role,
          team,
          photo: photoData,
        },
      },
      { new: true }
    );

    if (!person) {
      return res.status(500).json({ message: "Failed to update the Info" });
    }

    return res.status(200).json({
      message: "User is Updated",
      data: person,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};


const deletePerson = async (req, res) => {
  try {
    console.log(req.body)
    const { id } = req.body;
    console.log(id)
    if (!id) {
      return res.status(400).json({ message: "Person ID is required" });
    }

    const existingPerson = await Person.findById(id);
    if (!existingPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    // Delete image from Cloudinary if exists
    if (existingPerson.photo?.public_id) {
      try {
        const result = await cloudinary.api.delete_resources([existingPerson.photo.public_id]);
        console.log("Cloudinary delete result:", result);
      } catch (cloudinaryError) {
        console.error("Error deleting from Cloudinary:", cloudinaryError);
        return res.status(500).json({ message: "Failed to delete the image from Cloudinary" });
      }
    }

    // Delete from DB
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (!deletedPerson) {
      return res.status(500).json({ message: "Failed to delete the person from database" });
    }

    return res.status(200).json({
      message: "Person deleted successfully",
      data: deletedPerson,
    });
  } catch (error) {
    console.error("Error in deletePerson:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getPerson = async (req, res) => {
  try {
    const persons = await Person.find();

    if (!persons || persons.length === 0) {
      return res.status(404).json({ message: "No persons found" });
    }

    return res.status(200).json({
      count: persons.length,
      data: persons
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getPersonID = async(req,res) => {
  try {
    const id =  req.params.id
const person = await Person.findById(id)
if(!person){
return res.status(404).json({ message: "Person not found" });
}

return res.status(200).json({
      data: person
    });

  } catch (error) {
     console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export { 
  createPerson, 
  updatePerson,
  deletePerson,
  getPerson,
  getPersonID
 };
