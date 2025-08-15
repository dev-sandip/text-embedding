import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from './middleware/error-handler.middleware';
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
import { vectorRouter } from './features/vectorization/routes/vector.route';
app.use('/api/v1/vectorization', vectorRouter);
app.get('/', (_, res) => {
  res.json({
    message: 'Welcome to text-embedding API',
    version: '1.0.0',
  });
});

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

app.use(errorHandler);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
