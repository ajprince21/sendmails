# Email Automation Script

This script automates the process of sending job application emails to potential employers or HR contacts. It is built using Node.js and utilizes the `nodemailer` library to send emails via Gmail.

## Features

- Automates the sending of emails containing a job application letter.
- Supports sending both plain text and HTML emails.
- Attachments, such as resumes, can be included with each email.
- Uses environment variables to handle sensitive information securely.
- Capable of managing email batches due to Gmail's limit of sending 500 emails per day.

## Requirements

- Node.js
- Nodemailer package
- dotenv package
- An active Gmail account

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ajprince21/sendmails
    cd sendmails
    ```

2. **Install the required packages**:

    ```bash
    npm install
    ```

3. **Environment Variables**:

   Create a `.env` file in the root directory of your project with the following content:

    ```
    USER_EMAIL=your-email@gmail.com
    USER_PASSWORD=your-email-password
    ```

   **Important**: Replace `your-email@gmail.com` and `your-email-password` with your Gmail address and password. If you use 2-Step Verification, consider generating an App Password for this purpose.

4. **Configure Email List**:

   - The default email list is a single test email for demonstration.
   - To adjust the number of recipients, modify the `emailList` or fetch more contacts using the `getHRList` function:
     ```javascript
     const email_list = getHRList(1);
     ```
   - You can increment the number (1) to fetch different email batches, managing the 500 daily email limit imposed by Gmail.

5. **Running the Script**:

    ```bash
    node sendEmails.js
    ```


## Email Content

- The script sends both plain text and HTML versions of the email.
- It includes detailed information about your application and attaches a resume (`Padmadhar_Tiwari_Resume.pdf`). Ensure this file is present in your project directory or adjust its path in the code.

## Important Notes

- Be cautious not to exceed Gmail's daily email sending limits to avoid temporary account blocks.
- Ensure compliance with policies to prevent your emails from being marked as spam.
- Customize the email content to suit your needs for specific job applications.

## Customization

Feel free to tweak the email template, subject, or attachments to fit different job applications or personal preferences. Modify the styling in the HTML content for a more personalized feel.

## Disclaimer

Sending numerous unsolicited emails can lead to your account being flagged for spam. Adhere to best practices in email delivery and follow any relevant regulations when using this script.

Enjoy seamless automation of your job application emails!

--- 
