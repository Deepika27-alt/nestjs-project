import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { } // dependency injection
    @Post('signup')
    signup(@Body() data: SignupDto) {
        return this.authService.registerUser(data);
    }
    @Post('login')
    login(@Body() data: LoginDto) {
        return this.authService.loginUser(data);
    }
}