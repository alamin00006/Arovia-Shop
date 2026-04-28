import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ReviewService } from './review.service';

@Controller('api/v1/reviews')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}
  @Post() @UseGuards(JwtAuthGuard) create(@CurrentUser() user: any, @Body() body: any) { return this.service.create(user.id, body); }
  @Patch(':id/moderate') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) moderate(@Param('id') id: string, @Body('approved') approved: boolean) { return this.service.approve(id, approved); }
  @Get('product/:productId') list(@Param('productId') productId: string) { return this.service.byProduct(productId); }
}
