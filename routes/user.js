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
            friendsList: req.body.friendsList,
        });

        await user.save();
        return res.send({ _id: user._id, name: user.name, email: user.email });
}catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
}
});


router.get('/:_id', async (req, res) => {
    try{
         const user = await User.findById(req.params._id);

         if (!user)
         return res.status(400).send(`The user with ID: ${_id} does not exist`);
         return res.send(user);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})


router.get('/', async (req, res) => {
    try {
        const user = await User.find()
            .select({ _id: 1, name: 1, email: 1, friendsList: 1})
            return res.send(user);
        
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); 

router.put('/:_id', async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(
            req.params._id,
            {
                friendsList: [req.body.friendsList],
            },
            { new: true }
        );

        if (!user)
        return res.status(400).send(`The user with ID: ${ex} does not exist`);

        await user.save();

        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Inter Server Error: ${ex}`);
    }
});

module.exports = router;

