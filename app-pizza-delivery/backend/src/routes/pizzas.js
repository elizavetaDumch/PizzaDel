const express = require('express')
const router = express.Router()
const Pizza = require('../models/pizza-model')
 
router.post('/pizzas', (req, res) => {
   const pizza = new Pizza(req.body)
   pizza.save((err, data) => {
     if (err) {
        console.log(err)
     } else {
        res.send({
          success: true,
          message: `Pizza with ID_${data._id} saved successfully!`
        })
     }
   })
})

router.get('/pizzas', (req, res) => {
   Pizza.find((err, pizzas) => {
      if (err) {
         res.sendStatus(500)
      } else {
         res.send({ pizzas: pizzas })
      }
   }).sort({ _id: -1 })
})
 
module.exports = router