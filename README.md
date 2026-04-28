# My Backend Project

This is a backend REST API application built using [NestJS](https://nestjs.com/). It offers user authentication, a task management system, and an AI integration using Google's Gemini models.

## Modules & Features

The application is structured into the following main modules:

### 1. **Auth Module** (`/auth`)
Handles user registration and authentication.
- `POST /auth/signup` - Registers a new user.
- `POST /auth/login` - Authenticates a user.

### 2. **Tasks Module** (`/tasks`)
A simple task management API module.
- Allows you to create and list tasks.
- newly created tasks default to the `OPEN` status.

### 3. **AI Module** (`/ai`)
Integrates with Google's Generative AI (`@google/generative-ai`).
- Uses the `gemini-2.5-flash` model to process natural language text prompts.
- `POST /ai/test` - Accepts a request body `{"prompt": "your prompt"}` and returns an AI-generated response.

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Environment Variables

You need an `.env` file in the root directory of your project. It must contain the following keys for the AI module to work properly.

```env
# Google Gemini API Key required for AI processing
AI_API_KEY=your_google_ai_api_key
```

### Running the Application

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

By default, the server runs on `http://localhost:3000`. 
