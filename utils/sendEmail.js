const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "abcd@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });
    //message object
    const message = {
      to,
      subject: "message from node mailer app",
      html: `
        <h3>you have received a message from node mailer app</h3>
        <p>${messageContent}</p>`,
    };

    //send the email
    const info = await transport.sendMail(message);
    console.log("mesage sent ", info.messageId);
  } catch (error) {
    console.log(error);
    throw new error("email could not be sent ");
  }
};

module.exports = sendEmail;
