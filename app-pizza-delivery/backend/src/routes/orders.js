const express = require('express')
const router = express.Router()
const Order = require('../models/order-model')
 
router.post('/orders', (req, res) => {
   const order = new Order(req.body)
   order.save((err, data) => {
     if (err) {
        console.log(err)
     } else {
        res.send({
          success: true,
          message: `Order with ID_${data._id} saved successfully!`
        })
     }
   })
})

router.get('/orders', (req, res) => {
  Order.find((err, orders) => {
     if (err) {
        res.sendStatus(500)
     } else {
        res.send({ orders: orders })
     }
  }).sort({ _id: -1 })
})
 
module.exports = router