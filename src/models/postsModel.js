import connectToDB from "../config/dbConfig.js";

const connection = await connectToDB(process.env.MONGODB_URI);

export async function findAllPosts() {
    const db = connection.db("imersao-backend-alura");
    const collection = db.collection("posts");
    const data = await collection.find().toArray();
    return data;
}

export async function findOnePost(postId) {
    const db = connection.db("imersao-backend-alura");
    const collection = db.collection("posts");
    const data = await collection.findOne(postId);
    return data;
}

export async function insertOnePost(post) {
    const db = connection.db("imersao-backend-alura");
    const collection = db.collection("posts");
    const result = await collection.insertOne(post);
    return result;
}