import { useState, useEffect } from "react";

const ALL_CARDS = [
  {
    emoji: "🗼",
    title: "Tokyo Hidden Alley Cafes – a photo thread",
    sub: "r/UrbanExplore",
    user: "u/neon_wanderer",
    comments: 9,
    badge: "verified",
    bg: "from-orange-900 to-red-950",
  },
  {
    emoji: "🖥️",
    title: "Why brutalist UI is making a comeback in 2025",
    sub: "r/Design",
    user: "u/grid_ghost",
    comments: 3,
    badge: "unverified",
    bg: "from-blue-900 to-blue-950",
  },
  {
    emoji: "🍞",
    title: "Homemade sourdough: 6-month journey in pics",
    sub: "r/BreadHeads",
    user: "u/crust_queen",
    comments: 3,
    badge: "verified",
    bg: "from-amber-900 to-orange-950",
  },
  {
    emoji: "💻",
    title: "Study: remote work boosts deep focus by 34 percent",
    sub: "r/FutureOfWork",
    user: "u/async_andy",
    comments: 2,
    badge: "disputed",
    bg: "from-slate-700 to-blue-950",
  },
  {
    emoji: "🐍",
    title: "Python 4.0 features nobody is talking about yet",
    sub: "r/Python",
    user: "u/snake_charmer",
    comments: 47,
    badge: "trending",
    bg: "from-green-900 to-emerald-950",
  },
  {
    emoji: "🤖",
    title: "Fine-tuning LLMs on a single RTX 4090 – full guide",
    sub: "r/MachineLearning",
    user: "u/grad_descent",
    comments: 62,
    badge: "new",
    bg: "from-purple-900 to-indigo-950",
  },
  {
    emoji: "🚀",
    title: "Deployed 1000 microservices and learned these hard lessons",
    sub: "r/devops",
    user: "u/k8s_survivor",
    comments: 77,
    badge: "verified",
    bg: "from-sky-900 to-blue-950",
  },
  {
    emoji: "🔧",
    title: "Linux tips I wish I knew 10 years ago",
    sub: "r/linux",
    user: "u/bash_wizard",
    comments: 312,
    badge: "verified",
    bg: "from-slate-800 to-slate-950",
  },
  {
  emoji: "🎮",
  title: "Best indie games nobody played in 2025",
  sub: "r/gaming",
  user: "u/game_master",
  comments: 128,
  badge: "trending",
  bg: "from-purple-900 to-pink-950",
},
{
  emoji: "📱",
  title: "Android 17 hidden features you should know",
  sub: "r/android",
  user: "u/mobile_geek",
  comments: 67,
  badge: "verified",
  bg: "from-green-900 to-emerald-950",
},
{
  emoji: "🎬",
  title: "Top 10 movies of 2025 according to Reddit",
  sub: "r/movies",
  user: "u/cinema_fan",
  comments: 245,
  badge: "new",
  bg: "from-red-900 to-rose-950",
},
{
  emoji: "⚽",
  title: "Why young footballers are choosing analytics",
  sub: "r/soccer",
  user: "u/goal_hunter",
  comments: 89,
  badge: "verified",
  bg: "from-blue-900 to-cyan-950",
},
{
  emoji: "🍕",
  title: "I tried every pizza place in my city",
  sub: "r/food",
  user: "u/pizza_lover",
  comments: 156,
  badge: "trending",
  bg: "from-orange-900 to-red-950",
},
{
  emoji: "🎮",
  title: "Best indie games released this year",
  sub: "r/gaming",
  user: "u/game_master",
  comments: 128,
  badge: "trending",
  bg: "from-purple-900 to-pink-950",
},
{
  emoji: "✈️",
  title: "10 places in Japan that tourists miss",
  sub: "r/travel",
  user: "u/wander_life",
  comments: 94,
  badge: "verified",
  bg: "from-sky-900 to-blue-950",
},
{
  emoji: "📚",
  title: "How I scored top marks in BCA semester exams",
  sub: "r/students",
  user: "u/study_pro",
  comments: 73,
  badge: "new",
  bg: "from-green-900 to-emerald-950",
},
{
  emoji: "🕵️",
  title: "Anonymous hacker claims to have found a flaw in a banking app",
  sub: "r/CyberWatch",
  user: "u/ghost_trace",
  comments: 287,
  badge: "trending",
  bg: "from-red-900 to-black",
},
{
  emoji: "🧬",
  title: "Scientists create AI that predicts diseases years in advance",
  sub: "r/FutureTech",
  user: "u/genome_guru",
  comments: 164,
  badge: "verified",
  bg: "from-purple-900 to-indigo-950",
},
{
  emoji: "🌙",
  title: "What if humans built cities on the Moon?",
  sub: "r/SpaceFuture",
  user: "u/lunar_architect",
  comments: 341,
  badge: "new",
  bg: "from-slate-800 to-blue-950",
},
{
  emoji: "🤖",
  title: "AI passed my entire semester exam without studying",
  sub: "r/ArtificialLife",
  user: "u/neural_ninja",
  comments: 432,
  badge: "disputed",
  bg: "from-cyan-900 to-blue-950",
},
{
  emoji: "🎮",
  title: "A student built GTA-like physics using only JavaScript",
  sub: "r/GameDev",
  user: "u/physics_dev",
  comments: 218,
  badge: "verified",
  bg: "from-green-900 to-emerald-950",
},
{
  emoji: "🚨",
  title: "Breaking: Major social media platform down worldwide",
  sub: "r/TechNews",
  user: "u/live_reporter",
  comments: 789,
  badge: "trending",
  bg: "from-orange-900 to-red-950",
},
{
  emoji: "🛰️",
  title: "Students launch a homemade satellite into near space",
  sub: "r/Innovation",
  user: "u/rocket_kid",
  comments: 156,
  badge: "verified",
  bg: "from-sky-900 to-indigo-950",
},
{
  emoji: "🧩",
  title: "Mystery challenge: Can you solve this digital crime case?",
  sub: "r/DetectiveHub",
  user: "u/case_master",
  comments: 502,
  badge: "trending",
  bg: "from-violet-900 to-purple-950",
},
{
  emoji: "⚛️",
  title: "Quantum computers may break modern passwords sooner than expected",
  sub: "r/QuantumTech",
  user: "u/qubit_hunter",
  comments: 198,
  badge: "verified",
  bg: "from-blue-900 to-purple-950",
},
{
  emoji: "👽",
  title: "Strange signal detected from deep space — scientists investigating",
  sub: "r/SpaceMysteries",
  user: "u/cosmic_echo",
  comments: 921,
  badge: "trending",
  bg: "from-indigo-900 to-black",
},
];

const BADGE_STYLES = {
  verified: "bg-emerald-950 text-emerald-400",
  unverified: "bg-orange-950 text-orange-400",
  disputed: "bg-red-950 text-red-400",
  trending: "bg-blue-950 text-blue-400",
  new: "bg-purple-950 text-purple-400",
};

function Card({ card, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, index * 50);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col cursor-pointer bg-slate-800/60 border border-slate-700/40"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.4s ease",
      }}
    >
      <div
        className={`h-28 flex items-center justify-center text-4xl bg-gradient-to-br ${card.bg}`}
      >
        {card.emoji}
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="text-sm font-semibold text-slate-100">
          {card.title}
        </p>

        <div className="text-xs text-slate-400">
          <div>{card.sub}</div>
          <div>{card.user}</div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-500">
            💬 {card.comments}
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
const COMMENTS = [
  {
    id: 1,
    user: "u/code_master",
    text: "This thread is really interesting.",
    replies: [
      {
        id: 2,
        user: "u/react_dev",
        text: "I agree! Learned a lot from it.",
        replies: [
          {
            id: 3,
            user: "u/frontend_guy",
            text: "Same here bro 🔥",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    id: 4,
    user: "u/design_pro",
    text: "The UI looks amazing.",
    replies: []
   },
  ];
       
function Comment({ comment, level = 0 }) {
  const [open, setOpen] = useState(true);

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
        <div className="font-semibold text-sky-400">
          {comment.user}
        </div>

        <div className="text-slate-300 mt-1">
          {comment.text}
        </div>

        {comment.replies.length > 0 && (
          <button
            className="text-xs text-blue-400 mt-2"
            onClick={() => setOpen(!open)}
          >
            {open ? "Hide Replies" : "Show Replies"}
          </button>
        )}
      </div>

      {open &&
        comment.replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            level={level + 1}
          />
        ))}
    </div>
  );
}

<div className="flex gap-2 mt-4">
  <button className="px-3 py-2 bg-green-600 rounded">
    ⬆ Upvote
  </button>

  <button className="px-3 py-2 bg-red-600 rounded">
    ⬇ Downvote
  </button>
</div>

export default function Pinthreads() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [votes, setVotes] = useState(125);

  return (
    <div
      className="min-h-screen bg-[#0d1b2e] text-white"
      style={{ padding: "20px" }}
    >
      <header className="flex items-center mb-6">
        <span className="text-2xl">📌</span>

        <h1 className="ml-2 text-2xl font-bold">
          <span className="text-sky-400">Pin</span>threads
        </h1>

        <span className="ml-auto text-slate-400">
          {ALL_CARDS.length} Threads
        </span>
      </header>

      <div className="flex gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {ALL_CARDS.map((card, index) => (
              <div
                key={index}
                onClick={() => setSelectedCard(card)}
              >
                <Card card={card} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        {selectedCard && (
          <div className="w-96 h-[85vh] overflow-y-auto p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-6xl mb-4">
              {selectedCard.emoji}
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {selectedCard.title}
            </h2>

            <p className="text-sky-400 mb-2">
              {selectedCard.sub}
            </p>

            <p className="text-slate-400 mb-4">
              Posted by {selectedCard.user}
            </p>

            <div className="mb-4">
              💬 {selectedCard.comments} Comments
            </div>

            <div className="mb-4">
              <span className="px-3 py-1 rounded bg-blue-900">
                {selectedCard.badge}
              </span>
            </div>

            <h3 className="font-bold mb-2">
              Thread Description
            </h3>

            <p className="text-slate-400">👁️ 12.4k Views</p>
            <p className="text-slate-400">🕒 Posted 3 hours ago</p>
            <p className="text-slate-400">🏷️ Technology</p>


            <p className="text-slate-300 leading-relaxed">
              This thread discusses "{selectedCard.title}".
              Community members share experiences,
              screenshots, opinions and useful tips
              related to this topic.
            </p>
            <div className="mt-8">
               <h3 className="text-lg font-bold mb-4">
                  Comments
              </h3>

              {COMMENTS.map((comment) => (
               <Comment
                 key={comment.id}
                 comment={comment}
                 />
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              <button 
                 className="px-4 py-2 bg-green-600 rounded"
                 onClick={() => setLiked(!liked)}
                 >
                 {liked ? "❤️ Liked" : "👍 Like"}
                 </button>

              <div className="text-yellow-400 font-bold mb-4">
              Score: {votes}
              </div>

<div className="flex gap-2 mb-4">
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
</div>

              <button 
                className="px-4 py-2 bg-blue-600 rounded"
                onClick={() => setSaved(!saved)}
                >
                 {saved ? "✅ Saved" : "📌 Save"}
                 </button>

              <button
                className="px-4 py-2 bg-red-600 rounded"
                onClick={() => setSelectedCard(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}