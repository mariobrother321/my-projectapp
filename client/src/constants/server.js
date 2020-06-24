const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://warm-earth-24313.herokuapp.com/'
  : 'http://localhost:5000/api/payment';
 
export default PAYMENT_SERVER_URL;