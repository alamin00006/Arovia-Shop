import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { BannerService } from './banner.service';

@Controller('api/v1/banners')
export class BannerController {
  constructor(private readonly service: BannerService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) create(@Body() body: any) { return this.service.create(body); }
  @Get() list() { return this.service.list(); }
}
