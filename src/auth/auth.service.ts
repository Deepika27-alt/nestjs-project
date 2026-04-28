import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    private users: any[] = [];
    registerUser(userData: SignupDto) {
        const userExists = this.users.find(user => user.email === userData.email);
        if (userExists) {
            throw new ConflictException("User already exists.");
        }
        this.users.push(userData);
        return { message: "User registered successfully!" };

    }
    loginUser(userData: LoginDto) {
        const user = this.users.find(u => u.email === userData.email);
        if (user && user.password === userData.password) {
            return { message: "Login successful!", user: { email: user.email } };
        }
        throw new UnauthorizedException("Invalid credentials");
    }

}