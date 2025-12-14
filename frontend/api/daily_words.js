/* eslint-env node */
// api/warmth.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // 1. 安全检查：从环境变量获取 Key
  const API_KEY = process.env.MY_GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "服务器端缺少 API Key" });
  }

  try {
    // 2. 初始化 Gemini
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 3. 准备提示词 (根据你的需求定制)
    const prompt = `
      Role: 你是一个温暖的老朋友。
      Task: 给用户一句简短的日常问候。
      Requirements: 
      - 字数控制在20字以内。
      - 语气自然，不要翻译腔。
      - 只要返回纯文本，不要Markdown格式。
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 5. 返回给前端
    return res.status(200).json({ 
      message: text.trim(),
      date: new Date().toISOString() 
    });

  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: "生成失败，请稍后再试" });
  }
}