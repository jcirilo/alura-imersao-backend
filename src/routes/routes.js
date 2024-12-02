import { createPost, getAllPosts, getPost } from "../controllers/postController.js";

export default function routes(app) {

    app.get("/", (req, res)=>{
        const response = {"message": "wellcome"};
        res.status(200).json(response);
    });

    app.get("/posts", getAllPosts);
    app.post("/post", createPost);
}