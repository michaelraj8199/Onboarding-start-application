const AWS = require("aws-sdk");
require("dotenv").config();
const { mongodb, dbName, MONGO_URL } = require("../config/dbConfig");
const { mongoose, onboardingmodel } = require("../config/dbScheema");

const getS3 = () => {
  return new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
};

const uploadFile = async (adminId, file) => {
  let response_filename;
  const s3 = getS3();
  const today = new Date();
  const dataString = `${today.getFullYear()}${
    today.getMonth() + 1 < 10
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1
  }${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

  if (fileType === "file") {
    response_filename = `${process.env.CHILD_PATH}${adminId}/file/${dataString}-${file.name}`;
    await s3
      .upload({
        Bucket: process.env.BUCKET_NAME,
        Key: response_filename,
        Body: file.data,
      })
      .promise();
    await onboardingmodel.updateOne(
      { _id: mongodb.ObjectId(adminId) },
      {
        $set: {
          file: response_filename,
        },
      }
    );
  }

  return response_filename;
};

module.exports = { uploadFile, getS3 };
