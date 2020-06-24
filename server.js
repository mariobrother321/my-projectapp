if (process.env.NODE_ENV === "production") {
  require('dotenv').load()
}

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const creds = require('./config/contact');
const cookieParser = require('cookie-parser');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const config = require('config');
const dbURI = config.get('mongoURI');
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const cors = require("cors")
const uuid = require("uuid/v4")
const morgan = require("morgan");
const CORS_WHITELIST = require('./client/src/constants/frontend');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY ;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY ;






const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))}

// Connect Database
connectDB();


//init Middleware
app.use(
  express.json({
    // Because Stripe needs the raw body, we compute it but only when hitting the Stripe callback URL.
    verify: (req, res, buf) => {
      if (req.originalUrl.startsWith('payment/session-complete')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(cors());

//app.use(methodOverride('_method'));

// view engine setup

//app.set('view engine', 'ejs')

//app.use(cookieParser());


//mongoose.connect(dbURI, {
 // useNewUrlParser: true,
  //useCreateIndex: true,
  //useUnifiedTopology: true ,
 // useFindAndModify: false,

//});


mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(function(req, res, next) { 
  //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});



//app.use('/userimages', express.static(__dirname));
app.use('/userimages', express.static('userimages'));



// Send Contact us details
app.post('/send',  (req, res) => {
  

  const mail =  `
  <p>You have a contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li> Name:${req.body.name}</li>
  <li> Phone Number:${req.body.number}</li>
  <li> Email:${req.body.email}</li>
 
  </ul>
  <h3>Message</h3>
  <p> ${req.body.message}</p>

  `;

  "use strict";

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });

  // send mail with defined transport object
  let info = ({
    from: '"Web Bussiness Solutions 👻" <foo@example.com>', // sender address
    to: "alexyssss1983@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: mail // html body
  });

  transporter.sendMail(info, (err, data) => {
  
    if (err) {
      res.redirect('/send/error');
     } else  {
      res.redirect('/send/success')
    }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
})

})



// Define Routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/products', require('./routes/api/product'));
app.use('/api/payment', require('./routes/api/payment'));


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./userimages", "build", "index.html"));
   });
  

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))