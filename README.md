# Text Embedding API

A RESTful API for generating vector text embeddings using free Hugging Face models. Designed for Nepali text embeddings and semantic search.

## Features

- Generate vector embeddings for input text via Hugging Face Inference API
- Supports any Hugging Face model with feature extraction pipeline
- REST API built with Express.js
- Input validation and error handling
- CORS and security middleware (Helmet)
- Easily extensible for other languages and models

## Getting Started

### Prerequisites

- Node.js >= 16
- [pnpm](https://pnpm.io/) or npm
- Hugging Face account (for free API token)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/text-embedding.git
   cd text-embedding
   ```
2. Install dependencies:

   ```sh
   pnpm install
   # or
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your Hugging Face credentials:

   ```
   cp .env.example .env
   ```

   Edit `.env`:

   ```
   MODEL_ID=your_model_id
   HF_TOKEN=your_huggingface_token
   PORT=3000
   NODE_ENV=development
   ```

### Running the API

Start the server:

```sh
pnpm start
# or
npm start
```

The API will be available at `http://localhost:3000`.

## Usage

Send a POST request to `/api/vectorize` with a JSON body:

```json
{
  "text": "Your text to embed"
}
```

Example using `curl`:

```sh
curl -X POST http://localhost:3000/api/vectorize \
  -H "Content-Type: application/json" \
  -d '{"text": "नेपाल एक सुन्दर देश हो"}'
```

Response:

```json
{
  "embeddings": [0.123, 0.456, ...]
}
```

## Configuration

- Model and token are configured via environment variables in `.env`.
- See [src/config/env.ts](src/config/env.ts) for details.

## Project Structure

- `src/app.ts` - Main Express app
- `src/features/vectorization/controller/vector.controller.ts` - Vectorization API controller
- `src/features/vectorization/service/vector.ts` - Vectorization service logic
- `src/config/` - Configuration files
- `tests/` - Unit and integration tests

## License

MIT

## Acknowledgements

- [Hugging Face Inference API](https://huggingface.co/inference-api)
