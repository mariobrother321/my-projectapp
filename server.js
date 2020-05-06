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

const morgan = require("morgan");





// Connect Database
connectDB();


//init Middleware
app.use(express.json());


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
//app.use(morgan("dev"));

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());




app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



//app.use('/userimages', express.static(__dirname));
app.use('/userimages', express.static('userimages'));



// Send Email
app.post('/send',  (req, res) => {
  

  const mail =  `
  <p>You have a contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li> Name:${req.body.name}</li>
  <li> Phone Number:${req.body.number}</li>
  <li> Email:${req.body.email}</li>
  <li> Name:${req.body.name}</li>
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

// Serve static assets if in production
//if (process.env.NODE_ENV === "production") {

  //Set static folder
 // app.use(express.static("client/build"));

   //index.html for all page routes
  //app.get("*", (req, res) => {
//res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
 // });
//}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))