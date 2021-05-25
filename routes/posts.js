const {Posts,Replies} = require('../models/Posts')
const express = require('express');
const router = express.Router();


//GET posts

router.get('/', async (req, res) => {
    try {

        const posts = await Posts.find({});
            return res.send(posts);
        
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); 

//GET posts by ID

router.get('/:id', async (req, res) => {
    try{

        const posts = await Posts.find({userId: req.params.id});

        if(!posts)
        return res.status(400).send(`The post with id ${req.params.id} does not exist.`);
        return res.send(posts);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


// POST route for posts

router.post('/', async (req, res) => {
    try {

        const posts = new Posts({
            text: req.body.text,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            replies: req.body.replies,
            userId: req.body.userId
        });

        await posts.save();

        return res.send(posts);

    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//POST route for replies

router.post('/:id', async (req, res) => {
    try {

        const replies = new Replies({
            text: req.body.text,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
        });
        const posts = await Posts.findByIdAndUpdate(req.params.id);
        posts.replies.push(replies);
        await posts.save();
        
        return res.send(posts);

    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

// PUT route for likes and dislikes

router.put('/:id', async (req, res) => {
    try {

        const posts = await Posts.findByIdAndUpdate(
            req.params.id,
            {
                likes: req.body.likes,
                dislikes: req.body.dislikes,
            },
            { new: true }
        );

        if (!posts)
            return res.status(400).send(`The comment with is "${req.params.id}" does not exist.`);

            await posts.save();

            return res.send(posts);  
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});




module.exports = router;