import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from 'src/shared/zod-validation.pipe';
import { forgotPasswordSchema, loginSchema, refreshTokenSchema, registerSchema } from './auth.validation';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  @Post('login')
  @UsePipes(new ZodValidationPipe(loginSchema))
  login(@Body() body: any) {
    return this.authService.login(body);
  }

  @Post('refresh-token')
  @UsePipes(new ZodValidationPipe(refreshTokenSchema))
  refresh(@Body() body: { refreshToken: string }) {
    return this.authService.refreshToken(body.refreshToken);
  }

  @Post('forgot-password')
  @UsePipes(new ZodValidationPipe(forgotPasswordSchema))
  forgotPassword(@Body() body: { email: string }) {
    return this.authService.forgotPassword(body.email);
  }

  @Post('otp-login')
  otpLoginStructure() {
    return { message: 'OTP login endpoint scaffolded for future implementation' };
  }
}
