import { useState, useEffect } from "react";
import { BADGE_STYLES } from "../data/posts";

export default function Card({ card, index, onClick }) {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      onClick={onClick}
      className="rounded-xl overflow-hidden flex flex-col cursor-pointer bg-slate-800/60 border border-slate-700/40"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.4s ease",
      }}
    >
      <div className="h-28 bg-slate-700/40 relative overflow-hidden">
        {!loaded && !errored && (
          <div className="absolute inset-0 animate-pulse bg-slate-700/60" />
        )}
        {errored ? (
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs">
            Image unavailable
          </div>
        ) : (
          <img
            src={card.image}
            alt=""
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className="w-full h-full object-cover"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
          />
        )}
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="text-sm font-semibold text-slate-100">{card.title}</p>

        <div className="text-xs text-slate-400">
          <div>{card.sub}</div>
          <div>{card.user}</div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-500">
            💬 {countComments(card.comments)}
          </span>

          <span
            className={`text-[10px] px-2 py-1 rounded ${BADGE_STYLES[card.badge]}`}
          >
            {card.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

function countComments(comments = []) {
  return comments.reduce(
    (total, c) => total + 1 + countComments(c.replies),
    0
  );
}