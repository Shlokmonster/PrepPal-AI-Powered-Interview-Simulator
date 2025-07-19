
# PrepPal – AI-Powered Interview Simulator

PrepPal is a full-stack AI-driven mock interview platform that simulates realistic interview conversations using Google's Gemini API. It dynamically generates follow-up questions based on user responses and provides feedback to help candidates prepare effectively.

---
## System Architecture

![System Architecture](https://i.ibb.co/XkMccjXD/Screenshot-2025-07-19-at-6-02-19-PM.png)


**Explanation:**

- The user answers a question through the interface.
- The response is sent to the backend API route.
- The backend forwards the message to Gemini API.
- A follow-up question is generated and returned.
- The new question is rendered and React state is updated.

---


## Features

- Real-time mock interview experience with dynamic question generation
- Contextual follow-up questions powered by Gemini API
- One-question-at-a-time interface for focused answering
- Seamless session flow with auto-generated feedback
- Responsive, minimal UI built for clarity and performance

---

## Tech Stack

- **Frontend:** React.js, Next.js, Tailwind CSS
- **Backend:** Node.js (via Next.js API routes)
- **AI:** Google Gemini API

---

## Setup Instructions

**Prerequisites:**

- Node.js (v16 or later)
- Gemini API key

**Steps:**

```bash
git clone https://github.com/Shlokmonster/PrepPal-AI-Powered-Interview-Simulator.git
cd PrepPal-AI-Powered-Interview-Simulator
npm install
cp .env.example .env
# Add your Gemini API key to the .env file
npm run dev
```

App will run at `http://localhost:3000`.

---



## Project Structure

```
/pages
  index.js           # Main interview UI
  /api
    interview.js     # Backend API route to handle GPT interaction
/components
  QuestionBox.jsx    # Renders current question
  AnswerInput.jsx    # Accepts user response
/lib
  gemini.js          # Gemini API wrapper
```

---

## Usage Flow

1. User starts a new interview session
2. Initial question is generated
3. User submits answers in real-time
4. Gemini API returns follow-up questions based on context
5. Process continues until the user ends the session

---

## License

This project is licensed under the MIT License. See `LICENSE` file for details.
