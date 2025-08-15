import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { TextVectorizationService } from '../service/vector';

const vectorizationSchema = z.object({
  text: z.string().min(1, 'Text is required'),
});

export async function vectorizeText(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { text } = vectorizationSchema.parse(req.body);
    const embeddings = await TextVectorizationService.vectorizeText(text);
    res.json({ embeddings });
  } catch (error) {
    next(error);
  }
}
