import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { InventoryService } from './inventory.service';

@Controller('api/v1/inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}
  @Post('adjust') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) adjust(@Body() body: any) { return this.service.adjust(body.productId, body.delta, body.note); }
  @Get('low-stock') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) low(@Query('threshold') threshold?: string) { return this.service.lowStock(Number(threshold) || 10); }
}
