import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/shared/prisma.service';
import { comparePassword, hashPassword } from 'src/utils/hash';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async register(payload: { name: string; phone: string; email: string; password: string }) {
    const exists = await this.prisma.user.findFirst({
      where: { OR: [{ email: payload.email }, { phone: payload.phone }] }
    });
    if (exists) throw new BadRequestException('User already exists');

    const user = await this.prisma.user.create({
      data: {
        ...payload,
        password: await hashPassword(payload.password),
        role: Role.CUSTOMER
      }
    });

    const tokens = await this.getTokens(user.id, user.role);
    await this.prisma.user.update({ where: { id: user.id }, data: { refreshToken: tokens.refreshToken } });
    return { user, tokens };
  }

  async login(payload: { credential: string; password: string }) {
    const user = await this.prisma.user.findFirst({
      where: { OR: [{ email: payload.credential }, { phone: payload.credential }] }
    });
    if (!user || !(await comparePassword(payload.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const tokens = await this.getTokens(user.id, user.role);
    await this.prisma.user.update({ where: { id: user.id }, data: { refreshToken: tokens.refreshToken } });
    return { user, tokens };
  }

  async refreshToken(refreshToken: string) {
    const user = await this.prisma.user.findFirst({ where: { refreshToken } });
    if (!user) throw new UnauthorizedException('Invalid refresh token');
    const tokens = await this.getTokens(user.id, user.role);
    await this.prisma.user.update({ where: { id: user.id }, data: { refreshToken: tokens.refreshToken } });
    return tokens;
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return { message: 'If the email exists, reset instruction has been sent' };
    return { message: 'Password reset workflow placeholder for email/OTP integration' };
  }

  private async getTokens(userId: string, role: Role) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({ sub: userId, role }),
      this.jwtService.signAsync({ sub: userId, role, type: 'refresh' }, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
      })
    ]);

    return { accessToken, refreshToken };
  }
}
