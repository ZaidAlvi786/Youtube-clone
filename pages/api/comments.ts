import { NextApiRequest, NextApiResponse } from "next";
import comments from "../../data/comments.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { videoId } = req.query;
  const filteredComments = comments.filter((comment) => comment.videoId === videoId);
  res.status(200).json(filteredComments);
}
