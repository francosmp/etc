var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fsmeccap@gmail.com',
      pass: '.'
    }
  });
  
  var mailOptions = {
    from: 'fsmeccap@gmail.com',
    to: 'fsmeccap@gmail.com,fsmeccap@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
