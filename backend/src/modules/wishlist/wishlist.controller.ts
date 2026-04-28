import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WishlistService } from './wishlist.service';

@Controller('api/v1/wishlist')
@UseGuards(JwtAuthGuard)
export class WishlistController {
  constructor(private readonly service: WishlistService) {}
  @Post() add(@CurrentUser() user: any, @Body('productId') productId: string) { return this.service.add(user.id, productId); }
  @Delete() remove(@CurrentUser() user: any, @Body('productId') productId: string) { return this.service.remove(user.id, productId); }
  @Get() list(@CurrentUser() user: any) { return this.service.list(user.id); }
}
