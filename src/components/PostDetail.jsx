import { useState } from "react";
import CommentSection from "./CommentSection";

function updateCommentTree(comments, targetId, updateFn) {
  return comments.map((comment) => {
    if (comment.id === targetId) {
      return updateFn(comment);
    }
    if (comment.replies.length > 0) {
      return {
        ...comment,
        replies: updateCommentTree(comment.replies, targetId, updateFn),
      };
    }
    return comment;
  });
}

function addReply(comments, parentId, newReply) {
  return updateCommentTree(comments, parentId, (comment) => ({
    ...comment,
    replies: [...comment.replies, newReply],
  }));
}

let nextCommentId = 100000;

export default function PostDetail({ post, onClose }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [votes, setVotes] = useState(post.votes);
  const [comments, setComments] = useState(post.comments);

  function handleVote(commentId, dir) {
    setComments((prev) =>
      updateCommentTree(prev, commentId, (comment) => {
        const current = comment.userVote;
        let delta = 0;
        let nextVote = dir;

        if (current === dir) {
          delta = dir === "up" ? -1 : 1;
          nextVote = null;
        } else {
          delta = (current ? 2 : 1) * (dir === "up" ? 1 : -1);
        }

        return { ...comment, votes: comment.votes + delta, userVote: nextVote };
      })
    );
  }

  function handleReply(parentId, text) {
    const newReply = {
      id: nextCommentId++,
      user: "u/you",
      text,
      votes: 1,
      time: "now",
      userVote: "up",
      replies: [],
    };
    setComments((prev) => addReply(prev, parentId, newReply));
  }

  return (
    <div className="w-96 h-[85vh] overflow-y-auto p-6 bg-slate-900 rounded-xl border border-slate-700">
      <div className="h-40 rounded-lg overflow-hidden mb-4 bg-slate-800">
        <img src={post.image} alt="" className="w-full h-full object-cover" />
      </div>

      <h2 className="text-2xl font-bold mb-3">{post.title}</h2>

      <p className="text-sky-400 mb-2">{post.sub}</p>

      <p className="text-slate-400 mb-4">Posted by {post.user}</p>

      <div className="mb-4">
        <span className="px-3 py-1 rounded bg-blue-900">{post.badge}</span>
      </div>

      <h3 className="font-bold mb-2">Thread Description</h3>

      <p className="text-slate-400">👁️ {post.views} Views</p>
      <p className="text-slate-400">🕒 Posted {post.postedAt}</p>
      <p className="text-slate-400 mb-4">🏷️ {post.tag}</p>

      <p className="text-slate-300 leading-relaxed">{post.description}</p>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">
          Comments ({countComments(comments)})
        </h3>
        <CommentSection
          comments={comments}
          onVote={handleVote}
          onReply={handleReply}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2 items-center">
        <button
          className="px-4 py-2 bg-green-600 rounded"
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Liked" : "👍 Like"}
        </button>

        <div className="text-yellow-400 font-bold">Score: {votes}</div>

        <button
          className="px-3 py-2 bg-green-600 rounded"
          onClick={() => setVotes(votes + 1)}
        >
          ⬆ Upvote
        </button>

        <button
          className="px-3 py-2 bg-red-600 rounded"
          onClick={() => setVotes(votes - 1)}
        >
          ⬇ Downvote
        </button>

        <button
          className="px-4 py-2 bg-blue-600 rounded"
          onClick={() => setSaved(!saved)}
        >
          {saved ? "✅ Saved" : "📌 Save"}
        </button>

        <button className="px-4 py-2 bg-red-600 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function countComments(comments = []) {
  return comments.reduce((total, c) => total + 1 + countComments(c.replies), 0);
}