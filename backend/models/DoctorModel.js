// models/DoctorModel.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
 name: { type: String, required: true, unique: true },
 education: { type: String },
 department: { type: String },
 about: { type: String },
 experience: { type: String },
 image: { type: String },
 youtubeLink: { type: String },
 instagramLink: { type: String },
 facebookLink: { type: String },
}, { timestamps: true });

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;