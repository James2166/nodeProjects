const mailgun = require("mailgun-js")
// 
const apiKey = process.env.MAILGUN_API_KEY
const DOMAIN = 'sandbox81c58dcc2a3f4b9d85bcc9e3aa44516c.mailgun.org';
const mg = mailgun({apiKey: apiKey, domain: DOMAIN});
// const data = {
// 	from: 'Excited User me@sandbox81c58dcc2a3f4b9d85bcc9e3aa44516c.mailgun.org',
// 	to: 'jlh3ndr@gmail.com',
//     subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Task App me@sandbox81c58dcc2a3f4b9d85bcc9e3aa44516c.mailgun.org',
        to: email,
        subject: 'Welcome to the App!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app!`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}

const sendCancelEmail = (email, name) => {
    const data = {
        from: 'Task App me@sandbox81c58dcc2a3f4b9d85bcc9e3aa44516c.mailgun.org',
        to: email,
        subject: 'Sorry to see you go',
        text: `Goodbye ${name} and thank you for using our app. feel free to email us on how we could have done better for you`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}