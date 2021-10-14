const path = require('path');
const express = require('express');
const compression = require('compression');
const nodeMailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const bodyParser = require('body-parser');

const redirectWwwTraffic = require('./middleware/redirectWwwTraffic');

const PUBLIC_PATH = path.resolve(`${__dirname}/../public`);
const app = express();
const {
    API_KEY,
    DOMAIN,
    EMAIL,
    PORT = 3000,
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

app.use(compression());
app.use(redirectWwwTraffic);
app.use(express.static(PUBLIC_PATH, {
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    },
}));
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

app.get('*', (req, res) => {
    res.status(404).sendFile(`${PUBLIC_PATH}/index.html`, { root: __dirname });
});

app.listen(PORT, () => console.log('Server is running at port: ', PORT));
