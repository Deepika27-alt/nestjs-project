import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { } // dependency injection
    @Post('signup')
    signup(@Body() data: any) {
        return this.authService.registerUser(data);
    }
    @Post('login')
    login(@Body() data: any) {
        return this.authService.loginUser(data);
    }
}