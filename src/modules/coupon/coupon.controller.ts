import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CouponService } from './coupon.service';

@Controller('api/v1/coupons')
export class CouponController {
  constructor(private readonly service: CouponService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) create(@Body() body: any) { return this.service.create(body); }
  @Get() list() { return this.service.list(); }
  @Patch(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
}
