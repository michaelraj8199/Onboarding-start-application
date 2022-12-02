var bcrypt = require("bcryptjs");
var saltRound = 10;
var jwt = require("jsonwebtoken");
var secret = process.env.secret;
var hashPassword = async (pwd) => {
  let salt = await bcrypt.genSalt(saltRound);
  let hash = await bcrypt.hash(pwd, salt);
  return hash;
};

var hashCompare = async (pwd, hash) => {
  let result = await bcrypt.compare(pwd, hash);
  return result;
};
var createToken = async (email, name, role) => {
  let token = jwt.sign(
    {
      email,
      name,
    },
    secret,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

var verifyToken = async (req, res, next) => {
  console.log("res", req.headers.token);
  let decodeData = jwt.verify(req.headers.token, secret);

  if (new Date() / 1000 < decodeData.exp) {
    next();
  } else {
    res.json({
      statuscode: 401,
      Message: "Expired login id ",
    });
  }
};

module.exports = { hashPassword, hashCompare, createToken, verifyToken };
