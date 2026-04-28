import { IsNotEmpty, MinLength, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Task title must be atleast 3 characters' })
    @IsString()
    title: string;
}