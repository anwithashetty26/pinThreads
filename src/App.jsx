import { useState, useMemo } from "react";
import Feed from "./components/Feed";
import PostDetail from "./components/PostDetail";
import { ALL_CARDS } from "./data/posts";

const PAGE_SIZE = 6;

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_CARDS;
    return ALL_CARDS.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.sub.toLowerCase().includes(q) ||
        card.user.toLowerCase().includes(q) ||
        card.tag.toLowerCase().includes(q)
    );
  }, [query]);

  const visibleCards = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleSearchChange(value) {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="min-h-screen bg-[#0d1b2e] text-white" style={{ padding: "20px" }}>
      <header className="flex items-center gap-4 mb-6 flex-wrap">
        <span className="text-2xl">📌</span>

        <h1 className="text-2xl font-bold">
          <span className="text-sky-400">Pin</span>threads
        </h1>

        <input
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search boards, topics, users..."
          className="ml-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-200 outline-none focus:border-sky-500 w-64"
        />

        <span className="ml-auto text-slate-400 text-sm">
          {filtered.length} of {ALL_CARDS.length} Threads
        </span>
      </header>

      <div className="flex gap-6">
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center text-slate-500 py-20">
              <p className="text-lg mb-1">No threads match "{query}"</p>
              <p className="text-sm">Try a different keyword or board name.</p>
            </div>
          ) : (
            <>
              <Feed cards={visibleCards} onSelect={setSelectedCard} />

              {hasMore && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="px-5 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400 transition"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {selectedCard && (
          <PostDetail
            key={selectedCard.id}
            post={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </div>
    </div>
  );
}