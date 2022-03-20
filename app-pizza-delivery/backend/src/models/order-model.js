const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
   firstName: {
      type: String
   },
   secondName: {
      type: String
   },
   userPhoneNumber: {
      type: String
   },
   userCity: {
      type: String
   },
   street: {
      type: String
   },
   numOfHouse: {
      type: String
   },
   numOfFlat: {
      type: String
   },
   choisePayment: {
      type: String
   },
   pizzas: {
      type: Array
   }
})

const OrderModel = mongoose.model('orders', OrderSchema)
module.exports = OrderModel