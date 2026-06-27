// Central data source for all posts.
export const BADGE_STYLES = {
  verified: "bg-emerald-950 text-emerald-400",
  unverified: "bg-orange-950 text-orange-400",
  disputed: "bg-red-950 text-red-400",
  trending: "bg-blue-950 text-blue-400",
  new: "bg-purple-950 text-purple-400",
};

export function avatarFor(user) {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(user)}&backgroundColor=transparent`;
}

export const ALL_CARDS = [
  {
    id: 1,
    title: "Tokyo Hidden Alley Cafes - a photo thread",
    sub: "r/UrbanExplore",
    tag: "Travel",
    user: "u/neon_wanderer",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 4821,
    views: "12.4k",
    postedAt: "6h ago",
    description: "A walk through three back-alley cafes in Shimokitazawa and Yanaka that don't show up on most tourist maps - vinyl bars, single-origin pour-overs, and one place that's been open since 1962.",
    comments: [
      { id: 101, user: "u/sakura_fox", text: "The one in Shimokitazawa with the vinyl records is insane. Been there 3 times!", votes: 312, time: "5h",
        replies: [
          { id: 102, user: "u/derekw_82", text: "That's Cafe Zoetrope! The owner has 10,000 records.", votes: 98, time: "4h",
            replies: [
              { id: 103, user: "u/pixel.drift", text: "Wait they let you request any record? That's wild.", votes: 44, time: "3h", replies: [] }
            ]
          }
        ]
      },
      { id: 104, user: "u/r_ryujin", text: "The map link in the post is broken for me, anyone have an updated one?", votes: 201, time: "6h",
        replies: [
          { id: 105, user: "u/maplover_jp", text: "Try the Wayback Machine archive, still works there!", votes: 77, time: "5h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Why brutalist UI is making a comeback in 2025",
    sub: "r/Design",
    tag: "Design",
    user: "u/grid_ghost",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    badge: "unverified",
    votes: 2390,
    views: "8.1k",
    postedAt: "22h ago",
    description: "An argument that raw, unornamented interfaces are replacing the rounded-corner, soft-shadow look that's dominated SaaS products since 2018 - with examples from three startups that relaunched this year.",
    comments: [
      { id: 201, user: "u/sans_serif_sam", text: "The irony of a brutalist article having the cleanest layout I've seen this year.", votes: 540, time: "20h",
        replies: [
          { id: 202, user: "u/grid_ghost", text: "Intentional. The content argues for rawness but the container should be readable.", votes: 210, time: "19h", replies: [] }
        ]
      },
      { id: 203, user: "u/voidwatcher77", text: "Brutalism or not, accessible contrast ratios are non-negotiable.", votes: 88, time: "18h", replies: [] }
    ]
  },
  {
    id: 3,
    title: "Homemade sourdough: 6-month journey in pics",
    sub: "r/BreadHeads",
    tag: "Food",
    user: "u/crust_queen",
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 9102,
    views: "21.7k",
    postedAt: "2d ago",
    description: "Every loaf from month 1 (dense, sad, basically a brick) to month 6 (open crumb, proper ear). Starter is named Gerald and is doing great.",
    comments: [
      { id: 301, user: "u/yeast_beast", text: "Month 3 loaf looks unreal. What hydration were you at?", votes: 720, time: "2d",
        replies: [
          { id: 302, user: "u/crust_queen", text: "78 percent - it was scary but worth it. The open crumb started showing up.", votes: 300, time: "2d",
            replies: [
              { id: 303, user: "u/gluten.wizard", text: "Pro tip: fridge cold-proof for 18h at that hydration. Game changer.", votes: 115, time: "1d", replies: [] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Study: remote work boosts deep focus by 34 percent",
    sub: "r/FutureOfWork",
    tag: "Research",
    user: "u/async_andy",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",
    badge: "disputed",
    votes: 1550,
    views: "5.9k",
    postedAt: "3d ago",
    description: "Summary of a recent workplace-productivity study tracking uninterrupted focus blocks across 180 remote and in-office employees over 8 weeks.",
    comments: [
      { id: 401, user: "u/debunker_dan", text: "The sample size was 180 people. Let's not overstate this.", votes: 430, time: "3d",
        replies: [
          { id: 402, user: "u/async_andy", text: "Valid critique - I flagged the study as disputed for exactly that reason.", votes: 90, time: "3d", replies: [] }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Python 4.0 features nobody is talking about yet",
    sub: "r/Python",
    tag: "Programming",
    user: "u/snake_charmer",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 6210,
    views: "31.2k",
    postedAt: "9h ago",
    description: "A rundown of the quieter changes in the 4.0 release notes - pattern matching improvements, new typing shortcuts, and a startup-time fix nobody's hyped about but everyone will feel.",
    comments: [
      { id: 501, user: "u/typehint_tina", text: "The startup time fix alone might be worth the upgrade for our CLI tools.", votes: 188, time: "8h", replies: [] },
      { id: 502, user: "u/legacy_dev", text: "Cool, now do something about the GIL.", votes: 412, time: "7h",
        replies: [
          { id: 503, user: "u/snake_charmer", text: "Fair - free-threaded build is still experimental, that's a separate post.", votes: 96, time: "6h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Fine-tuning LLMs on a single RTX 4090 - full guide",
    sub: "r/MachineLearning",
    tag: "AI",
    user: "u/grad_descent",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=900&q=80",
    badge: "new",
    votes: 3120,
    views: "14.5k",
    postedAt: "1d ago",
    description: "Step-by-step QLoRA setup that fits a 7B model on 24GB of VRAM, with the exact batch size and gradient accumulation settings that stopped me from OOM-ing every 20 minutes.",
    comments: [
      { id: 601, user: "u/cuda_cat", text: "Which quantization did you end up using - 4-bit NF4?", votes: 140, time: "20h",
        replies: [
          { id: 602, user: "u/grad_descent", text: "Yep, NF4 with double quantization. Loss curve barely moved vs 8-bit.", votes: 75, time: "18h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Deployed 1000 microservices and learned these hard lessons",
    sub: "r/devops",
    tag: "Engineering",
    user: "u/k8s_survivor",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 5340,
    views: "19.8k",
    postedAt: "4d ago",
    description: "Lessons from scaling a platform team's service count from 40 to 1000+ - mostly about observability debt and how fast inter-service auth becomes the real bottleneck.",
    comments: [
      { id: 701, user: "u/sre_sarah", text: "The bit about alert fatigue at scale is so real. We had 400 dashboards nobody opened.", votes: 260, time: "3d", replies: [] }
    ]
  },
  {
    id: 8,
    title: "Linux tips I wish I knew 10 years ago",
    sub: "r/linux",
    tag: "Tools",
    user: "u/bash_wizard",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 8870,
    views: "44.1k",
    postedAt: "5d ago",
    description: "A list of small, boring habits - fzf, ripgrep, proper tmux config - that save more time over a decade than any single big productivity hack.",
    comments: [
      { id: 801, user: "u/dotfiles_dan", text: "ripgrep + fzf changed my life. Don't know how I lived without ctrl+r fuzzy search.", votes: 510, time: "5d",
        replies: [
          { id: 802, user: "u/bash_wizard", text: "Same. I still find new fzf bindings people have written years later.", votes: 140, time: "4d", replies: [] }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Best indie games nobody played in 2025",
    sub: "r/gaming",
    tag: "Gaming",
    user: "u/game_master",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 3540,
    views: "16.2k",
    postedAt: "11h ago",
    description: "A roundup of five small-team releases this year that deserved way more attention than they got, including one made entirely by a two-person studio in Estonia.",
    comments: [
      { id: 901, user: "u/retro_renny", text: "The pixel art one with the time-loop mechanic is criminally underrated.", votes: 220, time: "9h",
        replies: [
          { id: 902, user: "u/game_master", text: "Glad someone else noticed! It deserves a sequel.", votes: 60, time: "8h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Android 17 hidden features you should know",
    sub: "r/android",
    tag: "Mobile",
    user: "u/mobile_geek",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 2980,
    views: "13.4k",
    postedAt: "1d ago",
    description: "Six settings buried three menus deep that most people never find, including a battery diagnostic mode and a hidden per-app network usage breakdown.",
    comments: [
      { id: 1001, user: "u/flash_rom", text: "The per-app network breakdown alone saved my data plan last month.", votes: 95, time: "20h", replies: [] }
    ]
  },
  {
    id: 11,
    title: "Top 10 movies of 2025 according to Reddit",
    sub: "r/movies",
    tag: "Entertainment",
    user: "u/cinema_fan",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    badge: "new",
    votes: 4120,
    views: "22.9k",
    postedAt: "14h ago",
    description: "Aggregated upvotes across film subreddits to rank the year so far — a slow-burn sci-fi drama from a first-time director takes the top spot, somewhat surprisingly.",
    comments: [
      { id: 1101, user: "u/popcorn_pundit", text: "Number 1 came out of nowhere but it earned every bit of that ranking.", votes: 310, time: "12h",
        replies: [
          { id: 1102, user: "u/cinema_fan", text: "Agreed, the third act recontextualizes the whole film.", votes: 80, time: "11h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Why young footballers are choosing analytics over instinct",
    sub: "r/soccer",
    tag: "Sports",
    user: "u/goal_hunter",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 1890,
    views: "9.3k",
    postedAt: "2d ago",
    description: "A look at how youth academies in three countries are pairing traditional scouting with expected-goals models to decide who makes the senior squad.",
    comments: [
      { id: 1201, user: "u/tacticsguy", text: "Data helps, but it still can't measure a player's nerve in the 89th minute.", votes: 145, time: "1d", replies: [] }
    ]
  },
  {
    id: 13,
    title: "I tried every pizza place in my city - full ranking",
    sub: "r/food",
    tag: "Food",
    user: "u/pizza_lover",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 5760,
    views: "27.5k",
    postedAt: "8h ago",
    description: "32 pizzerias, one very full month, and a final ranking based on crust, sauce balance, and whether they reheat well the next day.",
    comments: [
      { id: 1301, user: "u/cheese_critic", text: "Surprised the place on 5th street ranked so low, their crust is incredible.", votes: 180, time: "6h",
        replies: [
          { id: 1302, user: "u/pizza_lover", text: "Crust was great, sauce was way too sweet for me though.", votes: 50, time: "5h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "10 places in Japan that tourists miss",
    sub: "r/travel",
    tag: "Travel",
    user: "u/wander_life",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 3320,
    views: "18.0k",
    postedAt: "3d ago",
    description: "Beyond Kyoto and Tokyo - a small fishing town in Shikoku, an underrated onsen valley, and a mountain shrine most guidebooks skip entirely.",
    comments: [
      { id: 1401, user: "u/offthebeaten", text: "Been to the onsen valley, can confirm it's basically empty even in peak season.", votes: 90, time: "2d", replies: [] }
    ]
  },
  {
    id: 15,
    title: "How I scored top marks in my BCA semester exams",
    sub: "r/students",
    tag: "Education",
    user: "u/study_pro",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    badge: "new",
    votes: 2210,
    views: "11.6k",
    postedAt: "16h ago",
    description: "My actual revision schedule, the spaced-repetition app I used, and why I stopped highlighting textbooks halfway through the semester.",
    comments: [
      { id: 1501, user: "u/cs_fresher", text: "The spaced repetition tip alone is worth bookmarking this post.", votes: 130, time: "14h", replies: [] }
    ]
  },
  {
    id: 16,
    title: "Researcher claims to have found a flaw in a major banking app",
    sub: "r/CyberWatch",
    tag: "Security",
    user: "u/ghost_trace",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    badge: "disputed",
    votes: 4870,
    views: "33.8k",
    postedAt: "5h ago",
    description: "A security researcher's writeup of a session-handling bug, disclosed responsibly to the bank two months ago and now public after a patch shipped.",
    comments: [
      { id: 1601, user: "u/infosec_irene", text: "Responsible disclosure timeline checks out, this looks legit.", votes: 410, time: "4h",
        replies: [
          { id: 1602, user: "u/skeptical_sam", text: "Still waiting on the bank's official statement before I fully buy it.", votes: 95, time: "3h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Scientists create AI that predicts disease risk years in advance",
    sub: "r/FutureTech",
    tag: "Health",
    user: "u/genome_guru",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 6620,
    views: "29.1k",
    postedAt: "1d ago",
    description: "A model trained on anonymized health records that flags elevated risk for three chronic conditions, published with a fairly transparent methodology section.",
    comments: [
      { id: 1701, user: "u/biostat_bea", text: "The methodology section is unusually thorough for a press-covered AI health study.", votes: 250, time: "22h", replies: [] }
    ]
  },
  {
    id: 18,
    title: "What if humans built cities on the Moon?",
    sub: "r/SpaceFuture",
    tag: "Space",
    user: "u/lunar_architect",
    image: "https://images.unsplash.com/photo-1457364559154-aa2644600ebb?auto=format&fit=crop&w=900&q=80",
    badge: "new",
    votes: 7340,
    views: "41.3k",
    postedAt: "2d ago",
    description: "A speculative but grounded look at radiation shielding, lava-tube habitats, and why lunar regolith concrete might actually work better than people assume.",
    comments: [
      { id: 1801, user: "u/regolith_rick", text: "The lava tube habitat section is the most realistic part of this for me.", votes: 290, time: "1d",
        replies: [
          { id: 1802, user: "u/lunar_architect", text: "Yeah, the existing data from lunar orbiters on tube size is promising.", votes: 70, time: "1d", replies: [] }
        ]
      }
    ]
  },
  {
    id: 19,
    title: "AI passed my entire semester exam without studying the material",
    sub: "r/ArtificialLife",
    tag: "AI",
    user: "u/neural_ninja",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    badge: "disputed",
    votes: 8920,
    views: "52.0k",
    postedAt: "7h ago",
    description: "An anecdotal test feeding past exam questions to a general-purpose model, with the actual transcript included so people can judge for themselves.",
    comments: [
      { id: 1901, user: "u/grading_ghost", text: "Some of those answers are clearly memorized phrasing, not real understanding.", votes: 670, time: "6h",
        replies: [
          { id: 1902, user: "u/neural_ninja", text: "Fair point, I didn't control for that and probably should have.", votes: 140, time: "5h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 20,
    title: "A student built GTA-style physics using only JavaScript",
    sub: "r/GameDev",
    tag: "Programming",
    user: "u/physics_dev",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 5430,
    views: "24.6k",
    postedAt: "9h ago",
    description: "A from-scratch 2D physics engine running entirely in the browser, with a playable demo and a writeup of the collision-resolution approach used.",
    comments: [
      { id: 2001, user: "u/canvas_carl", text: "The collision resolution at high speed is smoother than most commercial engines I've tried.", votes: 210, time: "7h", replies: [] }
    ]
  },
  {
    id: 21,
    title: "Major social media platform down worldwide for two hours",
    sub: "r/TechNews",
    tag: "News",
    user: "u/live_reporter",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 9870,
    views: "78.2k",
    postedAt: "3h ago",
    description: "Live thread tracking the outage, with status page screenshots and a rough timeline of when service started returning region by region.",
    comments: [
      { id: 2101, user: "u/outage_watcher", text: "Back up in my region as of 10 minutes ago, seems to be rolling out gradually.", votes: 320, time: "1h", replies: [] }
    ]
  },
  {
    id: 22,
    title: "Students launch a homemade satellite into near space",
    sub: "r/Innovation",
    tag: "Engineering",
    user: "u/rocket_kid",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 4250,
    views: "19.7k",
    postedAt: "1d ago",
    description: "A university club's third launch attempt, this time successfully reaching 31km with a payload that recorded temperature and radiation data the whole way up.",
    comments: [
      { id: 2201, user: "u/highaltitude_hank", text: "31km on a student budget is genuinely impressive, congrats to the team.", votes: 180, time: "22h", replies: [] }
    ]
  },
  {
    id: 23,
    title: "Mystery challenge: can you solve this digital forensics case?",
    sub: "r/DetectiveHub",
    tag: "Puzzle",
    user: "u/case_master",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 6110,
    views: "35.4k",
    postedAt: "10h ago",
    description: "A fictional case file with log excerpts and metadata clues — first correct theory in the comments with reasoning gets pinned.",
    comments: [
      { id: 2301, user: "u/logfile_larry", text: "The timestamp mismatch in clue 3 is the giveaway, the suspect's alibi doesn't hold up.", votes: 240, time: "8h",
        replies: [
          { id: 2302, user: "u/case_master", text: "That's exactly the thread to pull. Pinning this one.", votes: 60, time: "7h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 24,
    title: "Quantum computers may break modern passwords sooner than expected",
    sub: "r/QuantumTech",
    tag: "Security",
    user: "u/qubit_hunter",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80",
    badge: "verified",
    votes: 5980,
    views: "26.3k",
    postedAt: "2d ago",
    description: "A summary of recent error-correction progress and what it actually means for RSA timelines — shorter than the headlines suggest, but not as alarmist either.",
    comments: [
      { id: 2401, user: "u/crypto_clara", text: "Post-quantum migration is already happening quietly in a lot of backend systems.", votes: 195, time: "1d", replies: [] }
    ]
  },
  {
    id: 25,
    title: "Strange signal detected from deep space - scientists investigating",
    sub: "r/SpaceMysteries",
    tag: "Space",
    user: "u/cosmic_echo",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
    badge: "trending",
    votes: 11200,
    views: "63.7k",
    postedAt: "6h ago",
    description: "A repeating radio burst picked up by two independent observatories, most likely a known type of neutron star but not yet fully confirmed.",
    comments: [
      { id: 2501, user: "u/radio_rae", text: "Repeating pattern strongly points to a magnetar, not aliens, sorry to disappoint.", votes: 480, time: "4h",
        replies: [
          { id: 2502, user: "u/cosmic_echo", text: "Yeah the post title is clickbait-y, the actual paper is way more measured.", votes: 110, time: "3h", replies: [] }
        ]
      }
    ]
  },
  {
    id: 26,
    title: "I rebuilt my entire portfolio site in a weekend - here's the stack",
    sub: "r/webdev",
    tag: "Programming",
    user: "u/ship_it_steph",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    badge: "new",
    votes: 2670,
    views: "14.9k",
    postedAt: "4h ago",
    description: "Vite, Tailwind, and a static markdown blog with no CMS - the whole rebuild took about 14 hours spread across two days, including deployment.",
    comments: [
      { id: 2601, user: "u/static_site_stan", text: "No CMS is so underrated for personal sites, way less to maintain.", votes: 150, time: "2h", replies: [] }
    ]
  }
];