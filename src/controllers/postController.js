import { findAllPosts, findOnePost, insertOnePost } from "../models/postsModel.js";

export async function getAllPosts (req, res) {
    try {
        const data = await findAllPosts();
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function getPost (req, res) {
    try {
        const data = await findOnePost(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function createPost(req, res) {
    try {
        const newPost = req.body;
        const result = await insertOnePost(newPost);
        res.status(201).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}