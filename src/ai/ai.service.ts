import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GoogleGenerativeAI } from "@google/generative-ai";

@Injectable()
export class AiService {
    private genAI: GoogleGenerativeAI;
    constructor() {
        const apiKey = process.env.AI_API_KEY;
        if (!apiKey) {
            throw new Error("AI_API_KEY environment variable is not defined");
        }
        this.genAI = new GoogleGenerativeAI(apiKey);
    }
    async processText(prompt: string) {
        try {
            const model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return {
                originalPrompt: prompt,
                aiResponse: response.text()
            }
        } catch (error) {
            // Log the detailed error from the Google library
            console.error('Google API Error Details:', JSON.stringify(error, null, 2));
            throw new InternalServerErrorException(`AI call failed: ${error.message}`);
        }
    }
}