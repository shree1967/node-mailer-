const express = require("express");
const sendEmail = require("./utils/sendEmail");

const app = express();
const PORT = process.env.PORT || 9000;

//set view engine
app.set("view engine", "ejs");

//server static assets
app.use(express.static("public"));

//pass the data from form
app.use(express.urlencoded({ extended: true }));

//route ro render email form
app.get("/", (req, res) => {
  res.render("email-form");
});

app.post("/send-mail", async (req, res) => {
  const { email, message } = req.body;
  try {
    sendEmail(email, message);
    res.render("email-form", {
      status: "success",
      message: "message sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.render("email-form", {
      status: "error",
      message: "message not sent",
    });
  }
});

app.listen(PORT, () => console.log("server started on port 9000"));
