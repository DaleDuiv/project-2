const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "js")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

const nodemailer = require('nodemailer')

const sendMail = () =>{
  const transporter = nodemailer.createTransport({
      service : 'hotmail',
      auth : {
          user : 'testforbootcamp@outlook.com',
          pass : 'TestPassword111'
      }
  })

  const options = {
      from : 'testforbootcamp@outlook.com', 
      to : 'testforbootcamp@outlook.com', 
      subject : "Test", 
      text : 'Test message',
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

sendMail()
