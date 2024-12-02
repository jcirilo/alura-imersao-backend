
import { MongoClient, ServerApiVersion } from "mongodb";

export default async function connectToDB(connectionURI) {

    let options= {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    };
    
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    let client = new MongoClient(connectionURI, options);

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return client;
    } catch(error) { 
        console.log("Database connection error: ", error.message);
        await client.close();
        process.exit();
    }
}