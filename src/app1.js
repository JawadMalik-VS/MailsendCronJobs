"use strict";
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const dayjs = require("dayjs");
//email message options
const mailOptions = {
  from: "jawad.maliki786@gmail.com",
  to: "jawad.malik@viralsquare.org",
  subject: "Email from Node-app: A test message",
  text: "Hello from my Node",
};
// email transport config
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "jawad.maliki786@gmail.com",
    pass: "vkdmmcyqntuiejnc",
  },
});
//Applying the date format
const DateFac = dayjs(1000).subtract(1, "hour").format("ss mm HH D MMM dddd");
//dayjs().utc('YYYY-MM-DD')
//Scheduling Email
cron.schedule(DateFac, () => {
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Email Send", info.response);
    }
  });
});
// cron.schedule('* * * * * *', () => {
//     console.log("email getting..")
// })
