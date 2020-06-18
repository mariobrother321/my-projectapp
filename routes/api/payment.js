const stripe = require('../../constants/stripe');
const express = require('express');
const app = express.Router(); 



const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}
 

  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });
 
  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });
 


module.exports = app;