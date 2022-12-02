const router = require("express").Router();
const Post = require("../config/dbScheema");
const {
  hashPassword,
  hashCompare,
  createToken,
  verifyToken,
} = require("../config/auth1");
const { compare } = require("bcryptjs");
const { verify } = require("jsonwebtoken");

const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/dashboard/addEmployee", async (req, res) => {
  const { name, Email, ContractNumber, Place } = req.body;

  if (!name || !Email || !ContractNumber || !Place) {
    return res.status(401).json({
      Message: "pls fill details",
    });
  }

  try {
    const post = Post({
      Name: name,
      Email: Email,
      ContractNumber: ContractNumber,
      Place: Place,
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
router.get("/", async (req, res) => {
  try {
    const post = await Post.find(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/employee/:id", (req, res) => {
  const id = req.params.id;
  employee.remove({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("error occured");
    } else {
      res.status(200).json({ msg: "successfully deleted" });
    }
  });
});

//get

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/employee/:id", async (req, res) => {
  const { name, email, place, mobile } = req.body;

  if (!name || !email || !place || !mobile) {
    return res.status(200).json({
      message: "Please Fill all Fields...",
    });
  }

  const { id } = req.params;

  let employ = await Employee.findById(id);

  if (!employ) {
    return res.status(400).json({
      message: ["employee not found"],
    });
  }

  employ.Name = name || employ.Name;

  employ.Email = email || employ.Email;

  employ.Place = place || employ.Place;

  employ.ContractNumber = mobile || employ.ContractNumber;

  await employ.save();

  console.log(employ);

  return res.status(200).json({
    message: ["employee edited successfully"],
    data: employ,
  });
});

router.get("/sendmail/:id", async () => {
  const body = "This is a test email using SendGrid from Node.js";
  const url = process.env.base_url;
  const options = {
    to: "micheal.raj228@gmail.com",
    from: "nonreply@alchemylms.com",
    subject: "Test email with Node.js and SendGrid",
    html: `<h1>Welcome to Theecode</h1> <br>
    <a href="${url}">Click me</a>`,
  };

  try {
    await sendGridMail.send(options);
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Error sending test email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
});

module.exports = router;
