
const model = require('./../models/schema')
const nodemailer = require('nodemailer');
const config = require('./../../config');
const userSchema = require('./validator')


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
            let { name, email, phone, message, selectedExamControl } = req.body;
            const { error } = userSchema.validate(req.body);
            if (error) {
                // Consider returning a response here if validation fails
                return res.status(400).json({ error: error.message });
            }

            const newUser = await model.create({
                name,
                email,
                phone,
                message,
                selectedExamControl,
                ip: ipAddress,
            });

            console.log("data saved: ", newUser);

            // Send the response immediately after creating the user
            res.status(201).json(newUser); // Changed to JSON for consistency
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
                        <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Phone</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
                    </tr>
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">IP Address</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${ipAddress}</td>
                    </tr>
                    ${message ? `
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Message</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
                    </tr>
                    ` : ''}
                    ${selectedExamControl ? `
                    <tr style="background-color: #f2f2f2;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Exam</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${selectedExamControl}</td>
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




