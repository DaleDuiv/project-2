const nodemailer = require('nodemailer')

const sendMail = (to) =>{
  const transporter = nodemailer.createTransport({
      service : process.env.EMAIL_SERVICE,
      auth : {
          user : process.env.EMAIL_USER,
          pass : process.env.EMAIL_PASSWORD
      }
    })

  const options = {
      from : process.env.EMAIL_USER, 
      to, 
      subject : "Thank You!", 
      text : 'Thank you for signing up to our Workout Tracker! Created by Brodie, Dale and Shiham',
    }

  transporter.sendMail(options, (error, info) =>{
      if (error) {
        console.log(error) 
      } else {
        console.log(info);
        console.log("it worked")
      }
    })

}

module.exports = sendMail