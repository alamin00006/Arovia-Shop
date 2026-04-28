import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FlashSaleService } from './flash-sale.service';

@Controller('api/v1/flash-sales')
export class FlashSaleController {
  constructor(private readonly service: FlashSaleService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) create(@Body() body: any) { return this.service.create(body); }
  @Get('active') active() { return this.service.active(); }
}
