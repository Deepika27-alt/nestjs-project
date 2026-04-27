import { Module } from "@nestjs/common";
// import { AiController } from "./ai.controller";
import { AiService } from "./ai.service";

@Module({
    controllers: [],
    providers: [AiService]
})
export class AiModule { }