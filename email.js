// i had to install generate-password nodemailer 

const nodemailer = require('nodemailer');

// created transport with the use of smtp

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wowbowgmail.com',
        pass: '124tdgg..'
    }
});

// for the mail

let mailOptions = {
    from: 'wowbow007@gmail.com',
    to: 'bowwow@gmail.com',
    subject: 'Try out Email',
    text: 'Hello from wowbow'
};



transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

// PS: the email may not be sent due me trying to be careful CIA
