const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const Posts = require('../models/Post');

//GET pokazuje wszystkie posty
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({ message: err});
    }
});

//POST dodawanie postów 
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
        res.json({ message: err});
    }
});

//GET Wybrany post
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }  catch (err) {
        res.json({ message: err});
    }
})

//DELETE post
router.delete('/:postId', async (req,res) => {
    try{
    const removedPost = Post.remove({_id: req.params.postId });
    res.json(removedPost);
    } catch (err) {
        res.json({ message: err});
    }
});

//Update post
router.patch('/:postId', async (req,res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId }, 
        { $set: {title: req.body.title }}
        );
    res.json({ message: err});
    } catch (err) {
        res.json({ message: err});
    }
});


module.exports = router;