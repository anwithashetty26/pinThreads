import { useState } from "react";

function CommentItem({ comment }) {
  const [showReply, setShowReply] = useState(false);

  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "10px",
        padding: "10px",
        borderLeft: "2px solid #ccc",
      }}
    >
      <p>{comment.text}</p>

      <button onClick={() => setShowReply(!showReply)}>
        Reply
      </button>

      {showReply && (
        <div style={{ marginLeft: "20px" }}>
          {comment.replies &&
            comment.replies.map((reply, index) => (
              <CommentItem
                key={index}
                comment={reply}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          comment={comment}
        />
      ))}
    </div>
  );
}