import { NextApiRequest, NextApiResponse } from "next";
import videos from "../../data/videos.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(videos);
}
