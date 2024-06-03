
const saveUserInfo = require('./validator');
const model = require('./../models/schema')
const nodemailer = require('nodemailer');
const config = require('./../../config');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: config.EMAIL.EMAIL_USER,
        pass: config.EMAIL.EMAIL_PASS
    }
});


const sendMail = async (transporter, mailOptions) => {
    try {
        const info = await transporter.sendMail(mailOptions);
    }
    catch (error) {
        res.status(500).json('Internal Server Error');
    }
}

const UserCtrl = {

    async addUser(req, res) {
        try {
            const ipAddress = req.ip;
            const user = req.body;
            const savedUser = await saveUserInfo(user, ipAddress);

            res.json(savedUser);

            const mailOptions = {
                from: {
                    name: 'Hassan khan',
                    address: config.EMAIL.EMAIL_USER,
                },
                to: config.EMAIL.EMAIL_ADMIN,
                subject: 'New User Added',

                html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #4CAF50;">New User Added</h2>
                <p>A new user has been added with the following details:</p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Name</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${user.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Phone</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${user.phone}</td>
                    </tr>
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${user.email}</td>
                    </tr>
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">IP Address</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${ipAddress}</td>
                    </tr>
                    ${user.message ? `
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Message</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${user.message}</td>
                    </tr>
                    ` : ''}
                    ${user.selectedExamControl ? `
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Exam</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${user.selectedExamControl}</td>
                    </tr>
                    ` : ''}
                </table>
            </div>
        ` ,
            };
            sendMail(transporter, mailOptions)

        }
        catch (error) {
            console.error('Error adding user and notifying admin: ', error);
            res.status(500).json('Internal Server Error');
        }
    },

    async getAllUsers(req, res) {
        try {
            const data = await model.find();
            res.json(data)
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = UserCtrl;




