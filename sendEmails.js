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
// const emailList = Array(1).fill("ajprince0607@gmail.com");
const email_list = getHRList(1);

function sendEmails() {
  email_list.forEach((item) => {
    const { email } = item;
    const mailOptions = {
      from: '"Rahul Kumar" <' + process.env.USER_EMAIL + ">",
      to: email,
      subject: "Application for Software Engineer Position",
      text: `Dear Hiring Team,

        I hope this message finds you well. I am writing to express my interest in the Software Engineer position at your esteemed organization.

        My name is Rahul Kumar, and I am a Software Engineer with over 2+ years of professional experience in backend development. I have worked extensively with Java, Spring Boot, Hibernate, JPA, JDBC, RESTful APIs, Microservices, and SQL databases including MySQL and PostgreSQL. Throughout my career, I have built and optimized APIs, improved service performance, and contributed to scalable microservices-based architectures.

        During my tenure at Saarathi Finbiz and Decimal Technologies, I contributed to major banking and fintech projects, developing workflow modules, batch job APIs, schedulers. I also improved API response times and ensured seamless integration across services. I collaborated closely with cross-functional teams, followed agile practices, and maintained 100% adherence to coding standards and peer-review processes.

        I am particularly excited about the opportunity to contribute to innovative backend systems, solve complex engineering challenges, and support the organization’s growth with robust and scalable software solutions.

        Attached to this email is my updated resume, which provides more details about my professional experience and accomplishments. I would welcome the opportunity to discuss how my skills and background can contribute to your team.

        Thank you for considering my application. I look forward to hearing from you soon.

        Best regards,
        Rahul Kumar
        P: +91 9905616123
        E: rahul880453@gmail.com
        LinkedIn: linkedin.com/in/rahul-kumar-8528381a0
        `,
      html: `<p>Dear Hiring Team,</p>
        <p>I hope this message finds you well. I am writing to express my interest in the Software Engineer position at your esteemed organization.</p>

        <p>My name is <strong>Rahul Kumar</strong>, and I am a Software Engineer with over 2+ years of professional experience in backend development. I have worked extensively with <strong>Java, Spring Boot, Hibernate, JPA, JDBC, RESTful APIs, Microservices, MySQL, and PostgreSQL</strong>. Throughout my career, I have built and optimized backend services, improved API performance, and contributed to scalable microservices architectures.</p>

        <p>During my tenure at <strong>Saarathi Finbiz</strong> and <strong>Decimal Technologies</strong>, I contributed to major banking and fintech projects where I developed workflow modules, batch job APIs, schedulers, and optimized existing services to enhance system reliability and user experience. I also collaborated closely with cross-functional agile teams while maintaining 100% adherence to coding standards and peer-review practices.</p>

        <p>I am particularly excited about the opportunity to contribute to innovative backend systems and support your organization with robust, scalable, and high-quality software solutions.</p>

        <p>Attached is my updated resume, which provides further details about my experience and accomplishments. I would appreciate the opportunity to discuss how I can contribute to your team.</p>

        <p>Thank you for considering my application. I look forward to hearing from you soon.</p>

        <p>
        Best regards,<br>
        <strong>Rahul Kumar</strong><br>
        P: +91 9905616123<br>
        E: rahul880453@gmail.com<br>
        LinkedIn: <a href="https://linkedin.com/in/rahul-kumar-8528381a0">linkedin.com/in/rahul-kumar-8528381a0</a>
        </p>
        `,
      attachments: [
        {
          filename: "Rahul_Kumar_Resume.pdf",
          path: "./rahulKumar.pdf",
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
