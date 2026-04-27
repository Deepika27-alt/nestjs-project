import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('signup')
    handleSignup(@Body() data: any) { }
    @Post('login')
    handleLogin(@Body() data: any) { }
}