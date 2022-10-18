const authenticateJWT = require('../middleware/userAuth')
const User = require("../models/user");
var express = require('express');
var router = express.Router();
const  Partners = require('../models/partner');
const partnerCtrl = require('../controllers/partner')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

nodemailer.sendmail = true;
let transporter = nodemailer.createTransport({
    host: "mail.spglab.local",
    port: 25,
    type:"SMTP",
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/layouts',
}));


router.post('/create', authenticateJWT,async(req,res)=>{
    try {

        const {userId}= req.user
        const {contact ,email_contact ,raison_social,num_contact,mpn_id,situation} = req.body
        const partner = await Partners.findOne({raison_social})
        if (partner) return res.status(400).json({msg: "This partner already exists."})

        const newPartner = new Partners({
            contact ,email_contact ,raison_social,num_contact,mpn_id,situation,userUserId:userId
        })

        await newPartner.save()
        let mailOptions = {
            from: '"SPGLAB" <yahya.cherif@spglab.com.tn>',
            to: 'yahya.cherif@spg.com.tn',
            subject: 'Nouvelle Demande de réservation',
            html : `<div><h3>Détails</h3><br><strong>Email : </strong>`,

        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Email sent successfully !")
            }
        });

        res.json({msg: "Register Success! Please wait for to start."})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
)
router.get('id/:id', partnerCtrl.getPartner)
router.get('/all',partnerCtrl.getAllPartners)
router.put('/update/:id', partnerCtrl.updatePartner)
router.delete('/delete/:id', partnerCtrl.deletePartner)








module.exports = router;