import { Controller, Post, Body } from "@nestjs/common";
import { AiService } from "./ai.service";

@Controller('ai')
export class AiController {
    constructor(private aiService: AiService) { }
    @Post('test')
    async testAi(@Body('prompt') prompt: string) {
        return await this.aiService.processText(prompt);
    }

}