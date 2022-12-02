const mongoose = require("mongoose");
// const validator = require("validator");

const Admin = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: false,
    },
    Email: {
      type: String,
      required: true,
    },
    ContractNumber: {
      type: String,
      required: true,
    },
    Place: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const onboardingmodel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    DOB: {
      type: Date,
      required: true,
    },
    ContractNumber: {
      type: String,
      required: true,
    },
    AlternateNumber: {
      type: String,
      required: true,
    },
    Permanentaddress: {
      type: String,
      required: true,
    },
    temporaryaddress: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: String,
      required: false,
    },
    panNumber: {
      type: String,
      required: false,
    },
    aadharImageUrl: {
      type: String,
    },
    panImageUrl: {
      type: String,
    },
    bloodgroup: {
      type: String,
      required: false,
    },
    educationaldetails1: {
      type: String,
      required: false,
    },
    educationaldetails2: {
      type: String,
      required: false,
    },
    educationaldetails3: {
      type: String,
      required: false,
    },
    educationaldetails4: {
      type: String,
      required: false,
    },
    educationaldetails1Image: {
      type: String,
      required: false,
    },
    educationaldetails2Image: {
      type: String,
      required: false,
    },
    educationaldetails3Image: {
      type: String,
      required: false,
    },
    educationaldetails4Image: {
      type: String,
      required: false,
    },
    previousorganizationdocumnets: {
      type: String,
      required: false,
    },

    bankstatement: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);
let onboarding = mongoose.model("Users", onboardingmodel);
let adminModel = mongoose.model("Employees", Admin);
module.exports = { mongoose, adminModel, onboarding };
