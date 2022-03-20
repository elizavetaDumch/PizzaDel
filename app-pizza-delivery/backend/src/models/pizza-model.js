const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PizzaSchema = new Schema({
   name: {
      type: String
   },
   price: {
      type: Number
   },
   url: {
      type: String
   },
   filter: {
      type: String
   },
   img: {
      type: String
   },
   composition: {
      type: String
   },
   selectedIngredients: {
      type: Array
   }
})

const PizzaModel = mongoose.model('pizza', PizzaSchema)
module.exports = PizzaModel