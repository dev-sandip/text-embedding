import { FeatureExtractionOutput } from '@huggingface/inference';
import { env } from '../../../config/env';
import { textfeatureExtraction } from '../../../config/hf-client';
import { logger } from '../../../config/logger';

export class TextVectorization {
  constructor(
    private modelId: string,
    private hfToken: string
  ) {}
  async vectorizeText(
    text: string
  ): Promise<FeatureExtractionOutput | undefined> {
    try {
      const vector = await textfeatureExtraction(text);
      return vector;
    } catch (error) {
      logger.error(
        `Error vectorizing text: ${text}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
      return undefined;
    }
  }
}

export const TextVectorizationService = new TextVectorization(
  env.MODEL_ID,
  env.HF_TOKEN
);
