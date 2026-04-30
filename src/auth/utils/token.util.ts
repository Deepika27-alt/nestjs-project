import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class TokenUtil {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /**
   * Generates a signed JWT access token for a given user.
   * This utility follows the industry standard of extracting
   * token generation into a dedicated, injectable service.
   */
  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload: JwtPayload = { sub: userId, email };
    
    // It's a common practice to use an environment variable for the secret
    // You could also move this to JwtModule.registerAsync in AuthModule
    const secret = this.config.get<string>('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60m', // This can also be read from the config
      secret: secret,
    });

    return { access_token: token };
  }
}
