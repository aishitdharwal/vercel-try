# vercel-try

groq-chat-app/
├── pages/
│   ├── api/
│   │   └── chat.js          # Serverless API route that talks to Groq's API
│   └── index.js             # Frontend UI (simple chat input/output)
├── public/                  # Static files (if any)
├── styles/                  # Optional: CSS or Tailwind (if used)
│   └── globals.css
├── .env.local               # Local dev env vars (e.g. GROQ_API_KEY)
├── .gitignore
├── package.json
├── README.md
└── vercel.json              # Optional: for Vercel config
