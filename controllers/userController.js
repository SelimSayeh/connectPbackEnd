const User = require("../models/User");
const bcrypt = require("bcrypt");

const store = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              name: req.body.name,
              password: hash,
              email: req.body.email,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(200).json({
                  user,
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};
const login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
          error: true,
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
            error: true,
          });
        }
        if (result) {
          return res
            .json({ user, message: "auth successful", error: "false" })
            .status(200);
        }
        res.status(401).json({
          message: "Auth failed",
          error: true,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const verifEmail = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        res.status(200).json({
          message: "email  ok",
        });
      }
    });
};

module.exports = {
  store,
  verifEmail,
  login,
};
