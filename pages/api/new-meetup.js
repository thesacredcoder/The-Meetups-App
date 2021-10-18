import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      // const { title, image, address, desc } = data;

      const client = await MongoClient.connect(
        "mongodb+srv://akash:akash123@cluster0.odh9g.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "Meetup Inserted!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
