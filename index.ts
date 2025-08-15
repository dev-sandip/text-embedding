import axios from "axios";
import { config } from "dotenv";
config();
const MODEL_ID = process.env.MODEL_ID;
const HF_TOKEN = process.env.HF_TOKEN;

const API_URL = `https://api-inference.huggingface.co/pipeline/feature-extraction/${MODEL_ID}`;

export async function getEmbeddings(text: string): Promise<number[]> {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
        },
      }
    );
    return response.data[0];
  } catch (error) {
    console.error("Error fetching embeddings:", error);
    throw error;
  }
}
