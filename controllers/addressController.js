const Address = require("../models/Address");

const store = (req, res, next) => {
  const address = new Address({
    cep: req.body.cep,
    logradouro: req.body.logradouro,
    complemento: req.body.complemento,
    bairro: req.body.bairro,
    localidade: req.body.localidade,
    uf: req.body.uf,
    ibge: req.body.ibge,
    gia: req.body.gia,
    ddd: req.body.ddd,
    siafi: req.body.siafi,
    userid: req.body.userid,
  });
  address
    .save()
    .then((result) => {
      res.status(200).json({ address, message: "Address Created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
module.exports = {
  store,
};
