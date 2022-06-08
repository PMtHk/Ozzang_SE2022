const mongoose = require("mongoose");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

const ClothesSchema = mongoose.Schema({
  uploader: {
    type: String,
  },
  userid: {
    type: String,
  },
  name: {
    type: String,
    maxlength: 50,
  },
  brand: {
    type: String,
    trim: true, // trim = true 면 빈칸을 없애준다.
  },
  price: {
    type: String,
    maxlength: 10,
  },
  category: {
    type: String,
    maxlength: 13,
  },
  season: {
    type: String,
  },
  purchasePlace: {
    type: String,
  },
  purchaseDate: {
    type: Date,
  },
  img: {
    type: String,
  },
});

const Clothes = mongoose.model("Clothes", ClothesSchema);

module.exports = { Clothes };