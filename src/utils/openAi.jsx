import OpenAI from 'openai';
import { OpenApiKey } from './constants';

const openai = new OpenAI({
  apiKey:OpenApiKey,
  dangerouslyAllowBrowser: true , // defaults to process.env["OPENAI_API_KEY"]
});

export default openai