
const Partners = require('../models/partner')
const User = require("../models/user");



const partnerCtrl = {

    getPartner: async (req, res) => {
        try {
            const partner = await Partners.findByPk(req.params.id)

            res.json(partner)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAllPartners: async (req, res) => {
        try {
            const partners = await Partners.findAll ()
            res.json(partners)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatePartner: async(req, res) => {
        const partner = await Partners.findByPk(req.params.id);
        if(!partner) {
            res.status(404).send('Partner not found');
            return;
        }
        await Partners.update({contact:req.body.contact},{
            where:{
                partner_id: partner.partner_id
            }

        });
        return res.sendStatus(200);
    },
    deletePartner: async(req, res) => {
        const partner = await Partners.findByPk(req.params.id);
        if(!partner) {
            res.status(404).send('Partner not found');
            return;
        }
        await Partners.destroy({
            where:{
                partner_id: partner.partner_id
            }

        });
        return res.sendStatus(200);
    },


}


module.exports = partnerCtrl