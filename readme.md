🧩 JJKdle - Jujutsu Kaisen Guessing Game

JJKdle is a web-based guessing game inspired by "Wordle" and anime-themed games like "Narutodle" and "Loldle." In JJKdle, players must guess the correct Jujutsu Kaisen character based on feedback across five key attributes. Built using a full-stack JavaScript stack (React + Express + PostgreSQL), this game resets daily with a new character challenge.

📂 Project Structure

├── client/
│   ├── public/
│   │   └── images/               # Character images (48x48 PNGs)
│   ├── src/
│   │   ├── components/           # React components (e.g., GamePage, GuessRow)
│   │   ├── assets/               # Static assets (logos, icons)
│   │   ├── styles/               # CSS files
│   │   └── utils/                # Daily character logic
├── server/
│   ├── db/                       # PostgreSQL connection setup
│   ├── routes/                   # API endpoints
│   └── server.js                 # Express entry point
├── .env                          # Environment variables
├── README.md                     # You're here
└── package.json


🎮 Gameplay Overview

Each day features a new character from the Jujutsu Kaisen anime.

User types and submits guesses via a search bar.

For each guess, feedback is shown for:

Character image

Gender

Clan

Affiliation

Debut Arc

Attributes are color-coded:

✅ Green = correct match

❌ Red = incorrect

After 4 guesses, the user gets a helpful item-based hint.

Confetti celebration and countdown appear when the correct character is guessed.

🛠️ Tech Stack

Frontend:

1. React with functional components

2. CSS Grid & Flexbox for styling

3. React Router for navigation

4. Confetti animation with react-confetti

Backend:

1. Node.js with Express.js

2. PostgreSQL for character data

3. REST API endpoint: GET /api/characters


Database Schema:

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  name TEXT,
  grade TEXT,
  clan TEXT,
  affiliation TEXT,
  gender TEXT,
  debut_arc TEXT,
  image_url TEXT,
  item_hint TEXT
);

🧠 Features

🎯 Daily Challenge

Character is fixed for the day and fetched using a localStorage-based ID + timestamp logic

🔎 Autocomplete Input

Filters suggestions as user types

Click or press Enter to submit guess



📊 Guess Table

Styled table with rows showing each guess

Grid layout with animations and feedback colors

Only the latest row animates in



🎁 Hint System

Unlocks a unique item hint after 4 incorrect guesses

🎉 Confetti + Win Screen

Animated confetti overlay

Message + countdown until next reset



📸 Images & Assets

All character images are 48x48 PNGs

Placed inside client/public/images

Referenced via /images/filename.png in the image_url field

🧪 Environment Variables

Your .env files should include:

Server:

DATABASE_URL=your_postgres_connection_string
PORT=5000

Client:

VITE_API_BASE_URL=http://localhost:5000



⚙️ Scripts

# Server
cd server
npm install
npm run dev

# Client
cd client
npm install
npm run dev


🔐 Sensitive Data

Make sure the following are in your .gitignore:

.env

node_modules



📌 Future Improvements

Add difficulty modes (Hardcore, Time Trial)

Mobile responsiveness enhancements

Quote-based guess mode

Add sound effects or background music toggle

Leaderboards or sharing system


🙌 Acknowledgements

This project was inspired by the simplicity of Wordle, the creativity of Narutodle, and the epic universe of Jujutsu Kaisen.

Built by Soham Kotkar using full-stack JavaScript.



