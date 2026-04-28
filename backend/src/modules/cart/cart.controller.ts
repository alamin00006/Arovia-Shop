import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CartService } from './cart.service';

@Controller('api/v1/cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly service: CartService) {}
  @Post('items') add(@CurrentUser() user: any, @Body() body: any) { return this.service.addItem(user.id, body.productId, body.quantity); }
  @Patch('items') update(@CurrentUser() user: any, @Body() body: any) { return this.service.updateItem(user.id, body.productId, body.quantity); }
  @Delete('items') remove(@CurrentUser() user: any, @Body() body: any) { return this.service.removeItem(user.id, body.productId); }
  @Delete('clear') clear(@CurrentUser() user: any) { return this.service.clearCart(user.id); }
  @Get('summary') summary(@CurrentUser() user: any) { return this.service.summary(user.id); }
}
