require("dotenv").config();
const nodemailer = require("nodemailer");
const { getHRList } = require("./email_list");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// Email to test Mail
const emailList = Array(1).fill("padmadhar1998@gmail.com");
const email_list = getHRList(1);

function sendEmails() {
  emailList.forEach((email) => {
    const mailOptions = {
      from: "ajprince0607@gmail.com",
      to: email,
      subject: "Application for Software Engineer Position",
      text: `Dear Hiring Team,
      
      I hope this message finds you well. I am writing to express my interest in the Software Engineer position at your esteemed organization. I am confident in my ability to contribute effectively to your team.
      
      I hold a Bachelor’s degree in Computer Science Engineering and have knowledge in developing and maintaining software applications. I am proficient in Spring Boot, JDBC, JavaScript, and have worked extensively with SQL servers. Additionally, I am skilled in web technologies, including HTML, CSS, Bootstrap, jQuery, and React.js.
      
      During my internship at Seven Mentors Private Limited, I developed projects utilizing these technologies and fostered teamwork and collaboration among team members. My projects, including an E-Blogs Website and a Pizza Hut Clone Webpage, demonstrate my ability to handle both front-end and back-end development.
      
      I am particularly excited about the opportunity to collaborate with your talented teams and contribute to innovative projects that push industry boundaries. Furthermore, I am committed to continuously enhancing my skills and contributing to the growth of the organization.
      
      Attached to this email is my resume, which provides further details about my professional journey and accomplishments. I look forward to the possibility of discussing how I can contribute to your organization's success.
      
      Thank you for considering my application. I hope to hear from you soon.
      
      Best regards,
      Padmadhar Tiwari
      P: +91 9755032446
      E: padmadhar1998@gmail.com
      LinkedIn: www.linkedin.com/in/padmadhar98`,
      html: `<p>Dear Hiring Team,</p>
        <p>I hope this message finds you well. I am writing to express my interest in the Software Engineer position at your esteemed organization. I am confident in my ability to contribute effectively to your team.</p>
        <p>I hold a Bachelor’s degree in Computer Science Engineering and have experience in developing and maintaining software applications. I am proficient in Spring Boot, JDBC, JavaScript, and have worked extensively with SQL servers. Additionally, I am skilled in web technologies, including HTML, CSS, Bootstrap, jQuery, and React.js.</p>
        <p>During my internship at Seven Mentors Private Limited, I developed projects utilizing these technologies and fostered teamwork and collaboration among team members. My projects, including an E-Blogs Website and a Pizza Hut Clone Webpage, demonstrate my ability to handle both front-end and back-end development.</p>
        <p>I am particularly excited about the opportunity to collaborate with your talented teams and contribute to innovative projects that push industry boundaries. Furthermore, I am committed to continuously enhancing my skills and contributing to the growth of the organization.</p>
        <p>Attached to this email is my resume, which provides further details about my professional journey and accomplishments. I look forward to the possibility of discussing how I can contribute to your organization's success.</p>
        <p>Thank you for considering my application. I hope to hear from you soon.</p>
        <p>Best regards,<br>Padmadhar Tiwari<br>P: +91 9755032446<br>E: padmadhar1998@gmail.com<br>LinkedIn: <a href="https://www.linkedin.com/in/padmadhar98">www.linkedin.com/in/padmadhar98</a></p>`,
      attachments: [
        {
          filename: "Padmadhar_Tiwari_Resume.pdf",
          path: "./PadmadharResume-1.pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(`Error sending to ${email}: ` + error);
      }
      console.log(`Email sent to ${email}: ` + info.response);
    });
  });
}

sendEmails();
