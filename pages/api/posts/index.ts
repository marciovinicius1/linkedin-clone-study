import { InsertOneResult, Timestamp, WithId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InsertOneResult<Document> | WithId<Document>[]>
) {
  const { method, body } = req;
  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ ts: -1 })
        .toArray();
      res.status(200).json(posts as WithId<Document>[]);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        .insertOne({ ...body, ts: new (Timestamp as any)() });
      res.status(201).json(post);
    } catch (error: any) {
      res.status(500).json(error);
    }
  }
}
