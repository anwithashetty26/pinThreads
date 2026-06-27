import { useState } from "react";
import { avatarFor } from "../data/posts";

function CommentItem({ comment, level = 0, onVote, onReply }) {
  const [open, setOpen] = useState(true);
  const [replying, setReplying] = useState(false);
  const [draft, setDraft] = useState("");

  function submitReply() {
    const text = draft.trim();
    if (!text) return;
    onReply(comment.id, text);
    setDraft("");
    setReplying(false);
    setOpen(true);
  }

  return (
    <div
      style={{
        marginLeft: `${level * 20}px`,
        borderLeft: "2px solid #334155",
        paddingLeft: "10px",
        marginTop: "10px",
      }}
    >
      <div className="bg-slate-800 p-3 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <img
            src={avatarFor(comment.user)}
            alt=""
            className="w-6 h-6 rounded-full bg-slate-700"
          />
          <span className="font-semibold text-sky-400 text-sm">
            {comment.user}
          </span>
          <span className="text-xs text-slate-500">{comment.time}</span>
        </div>

        <div className="text-slate-300 mt-1">{comment.text}</div>

        <div className="flex items-center gap-3 mt-2 text-xs">
          <button
            className={`flex items-center gap-1 ${
              comment.userVote === "up" ? "text-emerald-400" : "text-slate-500"
            }`}
            onClick={() => onVote(comment.id, "up")}
          >
            ⬆
          </button>
          <span className="text-slate-400">{comment.votes}</span>
          <button
            className={`flex items-center gap-1 ${
              comment.userVote === "down" ? "text-red-400" : "text-slate-500"
            }`}
            onClick={() => onVote(comment.id, "down")}
          >
            ⬇
          </button>

          <button
            className="text-blue-400"
            onClick={() => setReplying(!replying)}
          >
            Reply
          </button>

          {comment.replies.length > 0 && (
            <button className="text-slate-500" onClick={() => setOpen(!open)}>
              {open ? "Hide Replies" : `Show Replies (${comment.replies.length})`}
            </button>
          )}
        </div>

        {replying && (
          <div className="mt-3 flex flex-col gap-2">
            <textarea
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Replying to ${comment.user}...`}
              className="bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200 resize-none"
              rows={2}
            />
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-sky-600 rounded text-xs"
                onClick={submitReply}
              >
                Post Reply
              </button>
              <button
                className="px-3 py-1 bg-slate-700 rounded text-xs"
                onClick={() => {
                  setReplying(false);
                  setDraft("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {open &&
        comment.replies.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            level={level + 1}
            onVote={onVote}
            onReply={onReply}
          />
        ))}
    </div>
  );
}

export default function CommentSection({ comments, onVote, onReply }) {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-slate-500 text-sm">
        No comments yet — be the first to say something.
      </p>
    );
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onVote={onVote}
          onReply={onReply}
        />
      ))}
    </div>
  );
}