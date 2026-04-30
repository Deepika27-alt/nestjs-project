import { ConflictException, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { TokenUtil } from "./utils/token.util";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,
        private tokenUtil: TokenUtil) { }
    async registerUser(userData: SignupDto) {
        const userExists = await this.prisma.user.findUnique({
            where: { email: userData.email },
        });
        if (userExists) throw new ForbiddenException('Email already registered!');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        const user = await this.prisma.user.create({
            data: {
                email: userData.email,
                password: hashedPassword,
            },
        });
        return { message: "User registered successfully!", user: { email: user.email } };

    }
    async loginUser(userData: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: userData.email }
        })
        if (!user) throw new UnauthorizedException("Invalid Credentials");
        const pwMatches = await bcrypt.compare(userData.password, user.password);
        if (!pwMatches) throw new UnauthorizedException("Invalid Credentials");
        return this.tokenUtil.signToken(user.id, user.email);

    }


}