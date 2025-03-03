import { useEffect, useState } from "react";

interface Comment {
  id: string;
  user: string;
  text: string;
}

interface CommentSectionProps {
  videoId: string;
}

export default function CommentSection({ videoId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch(`/api/comments/${videoId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [videoId]);

  const handleCommentSubmit = async () => {
    await fetch(`/api/comments/${videoId}`, {
      method: "POST",
      body: JSON.stringify({ text: newComment }),
      headers: { "Content-Type": "application/json" },
    });
    setNewComment("");
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Comments</h3>
      <input
        className="border p-2 w-full mt-2"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={handleCommentSubmit}>
        Post
      </button>
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b py-2">
            <p className="font-semibold">{comment.user}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
