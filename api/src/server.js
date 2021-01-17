const express = require('express');
const nodeMailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const {
    API_KEY,
    DOMAIN,
    EMAIL,
} = process.env;

if (!API_KEY) {
    throw Error('API_KEY environment variable is not defined');
}
if (!DOMAIN) {
    throw Error('DOMAIN environment variable is not defined');
}
if (!EMAIL) {
    throw Error('EMAIL environment variable is not defined');
}

const isEmailValid = email => (/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/).test(email);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendMessage', (req, res) => {
    const { name = '', email = '', message = '' } = req.body;
    const senderName = name.trim();
    const senderEmail = email.trim();
    const emailText = message.trim();

    if (!senderName || !senderEmail || !emailText) {
        return res.status(400).json({ error: 'name, email or message parameter is empty or missing' });
    }
    if (!isEmailValid(senderEmail)) {
        return res.status(400).json({ error: 'email is not valid' });
    }

    const auth = {
        api_key: API_KEY,
        domain: DOMAIN,
    };
    const nodeMailerMailgun = nodeMailer.createTransport(mg({ auth }));
    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: EMAIL,
        subject: `IFW. Message from ${senderName}`,
        text: emailText,
    };

    nodeMailerMailgun.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({ error });
            console.log(error);
        } else {
            res.sendStatus(200);
            console.log('Message %s sent', info.messageId);
        }
    });
});

app.listen(port, () => console.log('Server is running at port: ', port));
