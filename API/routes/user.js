const router = require("express").Router();
const Post = require("../config/dbScheema");
const path = require("path");
// const { v1: uuidv1 } = require("uuid");
const { uploadFile, getS3 } = require("../Commoncomponents/FileHandler");

//CREATE POST personaldetails
router.post("/personaldetails", async (req, res) => {
  const {
    name,
    DOB,
    ContractNumber,
    AlternateNumber,
    Permanentaddress,
    temporaryaddress,
  } = req.body;

  if (
    !name ||
    !DOB ||
    !ContractNumber ||
    !AlternateNumber ||
    !Permanentaddress ||
    !temporaryaddress
  ) {
    return res.status(401).json({
      Message: "pls fill details",
    });
  }

  try {
    const post = Post({
      name: name,
      DOB: DOB,
      ContractNumber: ContractNumber,
      AlternateNumber: AlternateNumber,
      Permanentaddress: Permanentaddress,
      temporaryaddress: temporaryaddress,
    });
    const savedPost = await post.save();
    return res.status(200).json({
      data: savedPost,
      status: false,
      message: "ok",
    });
  } catch (err) {
    console.log(err);

    return res
      .status(500)
      .json({ data: err, message: err.message, status: false });
  }
});

//CREATE Post idenity
router.post("/identity", async (req, res) => {
  let id = req.body.id;
  let f = req.files;
  console.log("trestfile", f);
  const {
    aadharNumber,
    panNumber,
    bloodgroup,
    educationaldetails1,
    educationaldetails2,
    educationaldetails3,
    educationaldetails4,
    educationaldetails1Image,
    educationaldetails2Image,
    educationaldetails3Image,
    educationaldetails4Image,
    panImage,
    aadharImage,
  } = req.body;

  if (
    !aadharNumber ||
    !panNumber ||
    !bloodgroup ||
    !educationaldetails1 ||
    !educationaldetails2 ||
    !educationaldetails3 ||
    !educationaldetails4
  ) {
    return res.status(401).json({
      Message: "pls fill details",
    });
  }
  if (req.files) {
    let upload = [];
    let image = req.files;
    if (image.length) {
      for (let i = 0; i < image.length; i++) {
        if (req.files) {
          let file = image[i];

          let fileName = `${process.env.S3ChildFolderPath}${file.fieldname}`;
          const uploadedImage = await s3
            .upload({
              Bucket: process.env.S3BUCKET,
              Key: fileName,
              Body: file.buffer,
            })
            .promise();
          console.log("nnnn", uploadedImage.Location);
          upload.push(uploadedImage.Location);
        }
      }
    } else {
      let fileName = `${process.env.S3ChildFolderPath}${image.name}`;
      const uploadedImage = await s3
        .upload({
          Bucket: process.env.S3BUCKET,
          Key: fileName,
          Body: image.data,
        })
        .promise();
      console.log("nnnn", uploadedImage.Location);
      upload.push(uploadedImage.Location);
    }
  }

  let stduent = await Post.findById(id);
  if (!stduent) {
    return res.json({
      status: false,
      message: "Fill IDENITY Details First",
    });
  }

  (stduent.aadharNumber = aadharNumber),
    (stduent.panNumber = panNumber),
    (stduent.bloodgroup = bloodgroup),
    (stduent.educationaldetails1 = educationaldetails1),
    (stduent.educationaldetails2 = educationaldetails2),
    (stduent.educationaldetails3 = educationaldetails3),
    (stduent.educationaldetails4 = educationaldetails4),
    (stduent.educationaldetails1Image = educationaldetails1Image),
    (stduent.educationaldetails2Image = educationaldetails2Image),
    (stduent.educationaldetails3Image = educationaldetails3Image),
    (stduent.educationaldetails4Image = educationaldetails4Image),
    (stduent.panImage = panImage),
    (stduent.aadharImage = aadharImage);

  // if (req.files.length > 0)
  if (req?.files?.image != null && req?.files?.image != undefined) {
    // upload(req.files);
    req.files ? await uploadFile(id, req.files.image, "panimage") : null;
  }
  if (req?.files?.image != null && req?.files?.image != undefined) {
    let logo = await uploadFile(user.id, req.files?.image, "logo", "");
  }

  const savedPost = await stduent.save();
  return res.status(200).json({
    data: savedPost,
    status: false,
    message: "ok",
  });
});

//CREATE WORKEXPERIENCE

router.post("/workexperience", async (req, res) => {
  
  const { previousorganizationdocumnets, bankstatement, id } = req.body;
  // let id = req.body.id;
  let f = req.files;
  console.log("trestfile", f);
  if (!previousorganizationdocumnets || !bankstatement || !id) {
    return res.status(401).json({
      Message: "pls fill details",
    });
  }
  let stduent = await Post.findById(id);
  if (!stduent) {
    return res.json({
      status: false,
      message: "Fill Personal Details First",
    });
  }
  if (req.files) {
    let upload = [];
    let image = req.files;
    if (image.length) {
      for (let i = 0; i < image.length; i++) {
        if (req.files) {
          let file = image[i];

          let fileName = `${process.env.S3ChildFolderPath}${file.fieldname}`;
          const uploadedImage = await s3
            .upload({
              Bucket: process.env.S3BUCKET,
              Key: fileName,
              Body: file.buffer,
            })
            .promise();
          console.log("nnnn", uploadedImage.Location);
          upload.push(uploadedImage.Location);
        }
      }
    } else {
      let fileName = `${process.env.S3ChildFolderPath}${image.name}`;
      const uploadedImage = await s3
        .upload({
          Bucket: process.env.S3BUCKET,
          Key: fileName,
          Body: image.data,
        })
        .promise();
      console.log("nnnn", uploadedImage.Location);
      upload.push(uploadedImage.Location);
    }
  }

  stduent.previousorganizationdocumnets = previousorganizationdocumnets;
  stduent.bankstatement = bankstatement;

  const savedPost = await stduent.save();
  return res.status(200).json({
    data: savedPost,
    status: false,
    message: "ok",
  });
});
//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/getallemp", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
