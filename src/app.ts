const nodemailer = require('nodemailer')
const cron = require('node-cron')
const dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);


//email message options
const mailOptions = {
    from: 'jawad.maliki786@gmail.com',
    to: "jawad.malik@viralsquare.org",
    subject: 'Email from Node-app: A test message',
    text:"Hey Buddy! did you got my email..."
}

// email transport config
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure:true,
    auth: {
      user: "jawad.maliki786@gmail.com",
      pass: "vkdmmcyqntuiejnc",
    },
});

const date = dayjs();
console.log("date",date)
let endDate = date;
//SCHEDULING CRON JOB TO FINISH CHALLENGE AT END DATEdayjs(endDate)
const Tony = dayjs(endDate);
console.log("Tony",Tony);

const year = dayjs(endDate).get("year") ;
 const endMonth = dayjs(endDate).get("month") + 1;
const dayofMonth = dayjs(endDate).date();
const getHours = dayjs(endDate).hour(); //-1 Because Cron Job index start from 0
const getMinute = dayjs(endDate).minute() + 1;
const getSec = dayjs(endDate).second(); 
 

const cronExpression = ` ${getMinute} ${getHours} ${dayofMonth}  ${endMonth} *`;

console.log("Cron Express", cronExpression)
console.log("year", year)
console.log("second",getSec)

//dayjs().utc('YYYY-MM-DD')



//Scheduling Email
 cron.schedule(cronExpression, () => {
// //Send email
transporter.sendMail(mailOptions, (error:any, info:any) => {
    if (error) {
        console.log("error",error)
    }
    else {
        console.log("Email Send",info.response)
    }
})    
   //  console.log("email")
 })


