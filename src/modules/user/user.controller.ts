import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ZodValidationPipe } from 'src/shared/zod-validation.pipe';
import { addressSchema } from './user.validation';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@CurrentUser() user: any) {
    return this.userService.getProfile(user.id);
  }

  @Post('me/addresses')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ZodValidationPipe(addressSchema))
  addAddress(@CurrentUser() user: any, @Body() body: any) {
    return this.userService.addAddress(user.id, body);
  }

  @Get('customers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.STAFF)
  customers(@Query() query: any) {
    return this.userService.adminCustomers(query);
  }

  @Patch(':id/block')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  block(@Param('id') id: string) {
    return this.userService.toggleBlock(id, true);
  }

  @Patch(':id/unblock')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  unblock(@Param('id') id: string) {
    return this.userService.toggleBlock(id, false);
  }
}
