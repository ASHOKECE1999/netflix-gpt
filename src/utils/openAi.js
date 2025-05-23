import OpenAI from 'openai';
// import 'dotenv/config';

// console.log(process.env.OPEN_AI_GPT_KEY,"KEYy")

const openApi = new OpenAI({
  apiKey:process.env.REACT_APP_OPEN_AI_GPT_KEY,dangerouslyAllowBrowser: true
});

export default openApi