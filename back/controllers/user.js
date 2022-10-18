const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userCtrl = {
    register: async (req, res) => {
        try {
            const {email ,password ,type,status,l_name,f_name} = req.body

            if(!password || !email ||!status ||!type ||!l_name ||!f_name)
                return res.status(400).json({msg: "Please fill in all fields."})

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "This user already exists."})

            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                password: passwordHash,email ,status,type,l_name,f_name
            })

            await newUser.save()


            res.json({msg: "Register Success! Please wait for to start."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },


    login : async(req, res) => {
        try {
            const user = await Users.findAll({
                where:{
                    email: req.body.email
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if(!match) return res.status(400).json({msg: "Wrong Password"});
            const userId = user[0].user_id;
            const name = user[0].f_name;
            const email = user[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '20s'
            });
            const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
                expiresIn: '1d'
            });
            await Users.update({refresh_token: refreshToken},{
                where:{
                    user_id: userId
                }
            });
            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json({ accessToken });
        } catch (error) {
            res.status(404).json({msg:"error 404"});
        }
    },
   refreshToken: async(req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            if(!refreshToken) return res.sendStatus(401);
            const user = await Users.findAll({
                where:{
                    refresh_token: refreshToken
                }
            });
            if(!user[0]) return res.sendStatus(403);
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if(err) return res.sendStatus(403);
                const userId = user[0].user_id;
                const name = user[0].f_name;
                const email = user[0].email;
                const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn: '15s'
                });
                res.json({ accessToken });
            });
        } catch (error) {
            console.log(error);
        }
    },
    getUserInfor: async (req, res) => {
        try {
            const user = await Users.findByPk(req.user.id).select('-password')

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUsersAllInfor: async (req, res) => {
        try {
            const users = await Users.findAll()
            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async(req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].user_id;
        await Users.update({refresh_token: null},{
            where:{
                user_id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    },
    activateUser: async(req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].user_id;
        await Users.update({status:"1"},{
            where:{
                user_id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    },
    desactivateUser: async(req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(204);
        const userId = user[0].user_id;
        await Users.update({status:"0"},{
            where:{
                user_id: userId
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    },

    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}


module.exports = userCtrl