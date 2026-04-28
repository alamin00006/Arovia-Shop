import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { DeliveryService } from './delivery.service';

@Controller('api/v1/delivery')
export class DeliveryController {
  constructor(private readonly service: DeliveryService) {}
  @Post('areas') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) create(@Body() body: any) { return this.service.createArea(body); }
  @Get('areas') list() { return this.service.listAreas(); }
}
