 const { User } = require('../models/user');
 const { validate } = require('../models/user')
 const bcrypt = require('bcrypt');
 const express = require('express');
 const router = express.Router();


router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send(`User already registered.`);

        const salt = await bcrypt.genSalt(10);
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
        });

        await user.save();
        return res.send({ _id: user._id, name: user.name, email: user.email });
}catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
}
});

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
            .select({ _id: 1, name: 1, email: 1})
            return res.send(user);
        
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); 

module.exports = router;

