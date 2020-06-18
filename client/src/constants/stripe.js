const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_6oHvFv9QaW30tno1EhIR2t5E00FF5751Se'
 
module.exports = STRIPE_PUBLISHABLE;