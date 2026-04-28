import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { OrderStatus, Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { OrderService } from './order.service';

@Controller('api/v1/orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}
  @Post('checkout') @UseGuards(JwtAuthGuard) checkout(@CurrentUser() user: any, @Body() body: any) { return this.service.checkout(user.id, body); }
  @Get('my-history') @UseGuards(JwtAuthGuard) myOrders(@CurrentUser() user: any) { return this.service.customerHistory(user.id); }
  @Get('track/:orderNumber') track(@Param('orderNumber') orderNumber: string) { return this.service.track(orderNumber); }
  @Get('admin/all') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) adminOrders() { return this.service.adminOrders(); }
  @Patch(':id/status') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) updateStatus(@Param('id') id: string, @Body('orderStatus') orderStatus: OrderStatus) { return this.service.updateStatus(id, orderStatus); }
}
