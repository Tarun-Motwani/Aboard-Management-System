const jwt = require('jsonwebtoken') // use to generate web token

const express = require('express') // use to create server

const router = express.Router(); // requiring router to navigate the data from frontened to database

const bcrypt = require('bcryptjs'); // use to secure password in database

const nodemailer = require('nodemailer') // use to emails

const SECRET_KEY = "MYFRIENDOMKARHARISHROHITMAHESHARUNTARUN" //it is a part of json web token

require('../db/conn'); // requiring database connection file so that we can store our data

const User = require("../model/userSchema"); //requiring skeleton structure of our registeration

//const cookie = require('cookie-parser')

// const authenticate = require('../Middleware/authenticate')

// Home page routing
const transporter3 = nodemailer.createTransport({

    service: "gmail",

    auth: {
        user: process.env.EMAIL,
        
        pass: process.env.PASSWORD
    }

})

router.post('/',async(req, res) => {
  // Requring frontended email in backend
  console.log(req.body)

  const { email } = req.body; // Initializing frontended email in object structure

  

  try {

      //Finding user email in our monogodb atlast
      const userfind = await User.findOne({ email: email });

      if (userfind) {

          //Defining the admin through which mails are send
          const mailOptions = {
              from: process.env.EMAIL,

              to: email,

              subject: "Congratulations on Subscribing to Global Academia - Your Platform for Studying Abroad!!",

              html: `<b>Dear ${userfind.fname},<br><br>

              <i>I am thrilled to inform you that you have successfully subscribed to Global Academia, the premier platform for studying abroad. On behalf of the entire team, I extend a warm welcome to you!
              <br><br>
              Studying abroad is a life-changing experience that opens up a world of opportunities, and we are here to help you achieve your academic aspirations. Our platform offers a range of resources and services to help you navigate the complexities of studying abroad and make the most of your academic journey.
              <br><br>
              As a subscriber to Global Academia, you can expect the following benefits:
              <br><br>
              Access to a comprehensive database of universities and courses across the world
              Expert guidance on admission procedures, scholarships, and visa requirements
              Assistance with finding suitable accommodation, transportation, and other logistics
              A supportive community of fellow students who share your aspirations and experiences
              Regular updates on the latest trends and developments in international education
              Our team of experienced counselors and advisors is committed to providing you with personalized assistance and guidance to ensure that your study abroad experience is a resounding success.
              <br><br>
              We are excited to have you on board and look forward to helping you achieve your academic goals. If you have any questions or concerns, please feel free to reach out to us at global.academia.consultants@gmail.com.
              <br><br>
              Thank you for subscribing to Global Academia, and we wish you all the best for your academic journey!
              <br><br>
              Best regards,<br><br>
              
              Global Academia</i></b>`
          }

          // sending email with the help of senMail method
          transporter3.sendMail(mailOptions, (error) => {

              //if there is error in mailoptions method than we thro a error
              if (error) {
                  console.log("error", error);
                  res.status(401).json({ status: 401, message: "email not send" })
              }

              else {
                  console.log("Email Sent Successfully");
                  res.status(201).json({ status: 201, message: "Email sent Successfully" })
              }

          })

      }

  }
  catch (error) {

      res.status(401).json({ status: 401, message: "invalid user" })

  }

    
});


// for registeration email
const transporter2 = nodemailer.createTransport({

    service: "gmail",

    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

})

// registeration page routing
router.post('/register', async (req, res) => {

    console.log(req.body); // requiring data from frontened

    const { fname, email, Phone, Password, cPassword } = req.body //Initializing frontened data to our userSchema

    // Validiating frontended data in our server 
    if (!fname || !email || !Phone || !Password || !cPassword) {

        return res.json({ status: 422, error: "plz filled the field" })

    }


    try {

        // if user is already register than we are showing the error that invaild details it means user cannot re-register in our app
        const userExist = await User.findOne({ email: email });


        if (userExist) {

            return res.json({ status: 422, error: "invalid details" })

        }


        // if password and confirm password is not same than user cannot register to our App
        else if (Password != cPassword) {

            return res.json({ status: 422, error: "invalid details" });

        }


        else {
            const user = new User({ fname, email, Phone, Password, cPassword })

            //After all this validation we can store user data in our database
            // But before storing user data in database we use a hashing technique 
            //hashing technique basically hash the password of user and make it unreadable

            await user.save();

            const userfind = await User.findOne({ email: email });

            // const usertoken = await User.findByIdAndUpdate({ _id: userfind._id }, { new: true });

            if (userfind) {

                //Defining the admin through which mails are send
                const mailOptions = {
                    from: process.env.EMAIL,

                    to: email,

                    subject: "Welcome to Global Academia - Your Platform for Studying Abroad!",

                    html: `
                    <b>Dear ${userfind.fname}
                    <br><br>
                    <i>
                    I am delighted to inform you that your registration to Global Academia, the premier platform for studying abroad, has been successfully processed. On behalf of the entire team, I extend a warm welcome to you!<br><br>

                    Studying abroad is an enriching experience that opens up a world of opportunities, and we are here to make your journey as smooth as possible. Our platform provides you with a range of resources and services to help you achieve your academic aspirations and explore new cultures.
                    <br><br>
                    With Global Academia, you can expect the following benefits:
                    <br><br>
                   A vast repository of information on universities and courses across the globe
                   Expert guidance on admission procedures, scholars…
               
                   <br><br>
                   Best regards,<br>
                   Global Academia </i>
                    </b>`
                }

                // sending email with the help of senMail method
                transporter2.sendMail(mailOptions, (error) => {

                    //if there is error in mailoptions method than we thro a error
                    if (error) {
                        console.log("error", error);
                        res.status(401).json({ status: 401, message: "email not send" })
                    }

                    else {
                        console.log("Email Sent Successfully");
                        res.status(201).json({ status: 201, message: "Email sent Successfully" })
                    }

                })

            }

            res.json({ status: 201, message: "user registered successfully" })
        }

    }
    catch (err) {

        console.log(err);
    }

});

//login route

router.post('/login', async (req, res) => {

    try {

        const { email, Password } = req.body //Initializing frontened data to our userSchema

        // Validiating frontended data in our server
        if (!email || !Password) {
            return res.status(400).json({ status: 400, error: "plz filled the field" })
        }

        // finding registered user in our database
        const userlogin = await User.findOne({ email: email });

        if (userlogin) {

            //comparing user password with hash password
            const isMatch = await bcrypt.compare(Password, userlogin.Password);

            if (!isMatch) {

                return res.status(400).json({ status: 400, error: "Invaild details Error" })

            }

            else {
                //token genrated
                const token = await userlogin.generateAuthToken();

                console.log(token);
                
                 res.json({ status: 201, message: "user signin successful" })
                
            //     // cookie generate
            //     res.cookie("jwtoken", token, {
            //         expires: new Date(Date.now() + 25892000000),
            //         httpOnly: true
            //     });

                   res.status(201).json({status:201,message:"user signin successfully"})

            }

        }
        else {

            return res.status(400).json({ status: 400, error: "Invaild details Error" })

        }

    } catch (error) {

        console.log(error)

    }
});

// creating transport root for sending linking to reset password
const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

})

// creating route for reset password link
router.post("/sendpasswordlink", async (req, res) => {

    // Requring frontended email in backend
    console.log(req.body)

    const { email } = req.body; // Initializing frontended email in object structure

    // If user not entered the email than we request to user enter your vaild id from backend
    if (!email) {

        res.status(401).json({ status: 401, message: "Enter Your Email" })

    }

    try {

        //Finding user email in our monogodb atlast
        const userfind = await User.findOne({ email: email });

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, SECRET_KEY, {

            expiresIn: "120s"

        });

        // Setting usertoken in verifytoken with the help of id 
        // verifytoken is important field because link is valid till 2 Minutes
        const usertoken = await User.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });

        //if user token is valid than we send the mail
        if (usertoken) {

            //Defining the admin through which mails are send
            const mailOptions = {
                from: process.env.EMAIL,

                to: email,

                subject: "Sending Email For password Reset",

                html: `Hello ${userfind.fname},<br><br>
                You recently took steps to reset the password for your Global Academia account.Click on the link below to reset your password.
                <br><br>
                http://localhost:3000/forgotpassword/${userfind.id}/${usertoken.verifytoken}  <br><br>
                This link will expire in 2 Minutes after this email was sent.<br><br>

                Sincerely,<br>
                Global Academia Team
                `
            }

            // sending email with the help of senMail method
            transporter.sendMail(mailOptions, (error) => {

                //if there is error in mailoptions method than we thro a error
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                }

                else {
                    console.log("Email Sent Successfully");
                    res.status(201).json({ status: 201, message: "Email sent Successfully" })
                }

            })

        }

    }
    catch (error) {

        res.status(401).json({ status: 401, message: "invalid user" })

    }

});


// change password

router.post("/forgotpassword/:id/:token", async (req, res) => {

    //requring id and token with the help params hook
    console.log(req.params);
    const { id, token } = req.params;

    //requring user updated password in backend
    console.log(req.body);
    const { Password } = req.body;

    try {

        const validuser = await User.findOne({ _id: id, verifytoken: token });
        console.log(validuser);

        const verifyToken = jwt.verify(token, SECRET_KEY);
        console.log(verifyToken)

        if (validuser && verifyToken._id) {

            const newpassword = await bcrypt.hash(Password, 12);

            const setnewuserpass = await User.findByIdAndUpdate({ _id: id }, { Password: newpassword });

            setnewuserpass.save();

            res.status(201).json({ status: 201, setnewuserpass })

        }
        else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }
    }
    catch (error) {
        res.status(401).json({ status: 401, error })
    }

})

module.exports = router;