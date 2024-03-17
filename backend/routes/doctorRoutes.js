// routes/doctorRoutes.js
const express = require("express");
const router = express.Router();
const Doctor = require("../models/DoctorModel");
const multer = require("multer");
const upload = require("../utils/multerConfig");
const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.error("Error fetching doctors:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newDoctor = new Doctor({
      name: req.body.name,
      education: req.body.education,
      department: req.body.department,
      about: req.body.about,
      experience: req.body.experience,
      image: req.file.path,
      youtubeLink: req.body.youtubeLink,
      instagramLink: req.body.instagramLink,
      facebookLink: req.body.facebookLink,
    });

    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    console.error("Error adding doctor:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error("Error fetching doctor:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Construct the full path to the image file
    const imagePath = `${doctor.image.replace(/\\/g, "/")}`;
   //  console.log(doctor.image);
    console.log(doctor.image.replace(/\\/g, "/"));

    // Delete the image file from the file system
    fs.unlink(imagePath, async (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
        return res.status(500).json({ message: "Error deleting image file" });
      }

      // If the image file is successfully deleted, proceed to delete the doctor from the database
      try {
        await Doctor.findByIdAndDelete(req.params.id);
        res
          .status(200)
          .json({ message: "Doctor and image deleted successfully" });
      } catch (err) {
        console.error("Error deleting doctor:", err);
        res.status(500).json({ message: "Server Error" });
      }
    });
  } catch (err) {
    console.error("Error deleting doctor:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
