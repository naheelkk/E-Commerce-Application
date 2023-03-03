const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Name:String,
  Category:String,
  Price:Number,
  Description:String,
  Image : Buffer
})

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;
