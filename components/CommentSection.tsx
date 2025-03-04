import { useEffect, useState } from "react";
import { Comment } from "../types/comment";

interface CommentSectionProps {
  videoId: string;
}

export default function CommentSection({ videoId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`/api/comments?videoId=${videoId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [videoId]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="border-b py-2">
          <p className="font-semibold">{comment.userName}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
