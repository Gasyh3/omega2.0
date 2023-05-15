const Post = require("../models/post-model");

// Function to create a new post
exports.createPost = async (req, res) => {
    try {
        const { postTitle, postContent, postImage } = req.body;
        const post = await Post.create({ postTitle, postContent, postImage });
        res.status(201).json({ message: "Post created successfully", post });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}
// Function to update a post
exports.updatePost = async (req, res) => {
    try {
        const { postTitle, postContent, postImage } = req.body;
        const { id } = req.params;
        const post = await Post.update(
            { postTitle, postContent, postImage },
            { where: { id } }
        );
        res.status(200).json({ message: "Post updated successfully", post });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}
// Function to delete a post
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.destroy({ where: { id } });
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}
// Function to get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json({ posts });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}
// Function to get a post by id
exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findOne({ where: { id } });
        res.status(200).json({ post });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}
// Function to get a post by title
exports.getPostByTitle = async (req, res) => {
    try {
        const { postTitle } = req.params;
        const post = await Post.findOne({ where: { postTitle } });
        res.status(200).json({ post });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
}