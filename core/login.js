const executeQuery = require("../database/exectueQuery");
const CONSTANTS = require("../constants/constants");
const jwt = require("jsonwebtoken");
const genToken = (username) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        data: {
          user: username,
        },
      },
      "secretKey",
      { expiresIn: "1h" },
      (err, encoded) => {
        if (err) {
          reject(CONSTANTS.JWT_ERR);
        }
        resolve(encoded);
      }
    );
  });
};
module.exports = {
  login: async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let result = await executeQuery.executeQuery(
      `select * from users where username ='${username}'`
    );
    let DbPasseord = result[0].pass;
    if (DbPasseord === password) {
      let res_token = await genToken(username).catch((err) => err);
      if (res_token === CONSTANTS.JWT_ERR) {
        res.send(500);
      } else {
        res.json({
          token: res_token,
        });
      }
    } else {
      res.send(500);
    }
  },
};
