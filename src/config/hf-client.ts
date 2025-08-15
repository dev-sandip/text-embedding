import {
  FeatureExtractionOutput,
  InferenceClient,
  InferenceClientError,
} from '@huggingface/inference';
import { env } from 'process';

export const textfeatureExtraction = async (
  text: string
): Promise<FeatureExtractionOutput | undefined> => {
  const client = new InferenceClient(env.HF_TOKEN);
  return client
    .featureExtraction({
      model: env.MODEL_ID,
      inputs: text,
    })
    .catch((error) => {
      if (error instanceof InferenceClientError) {
        console.error('Error from InferenceClient:', error);
      } else {
        console.error('Unexpected error:', error);
      }
      return undefined;
    });
};
