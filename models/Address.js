const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = new Schema(
  {
    cep: {
      type: String,
    },
    logradouro: {
      type: String,
    },
    complemento: {
      type: String,
    },
    bairro: {
      type: String,
    },
    localidade: {
      type: String,
    },
    uf: {
      type: String,
    },
    ibge: {
      type: String,
    },
    gia: {
      type: String,
    },
    ddd: {
      type: String,
    },
    siafi: {
      type: String,
    },
    userid: {
      type: String,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
