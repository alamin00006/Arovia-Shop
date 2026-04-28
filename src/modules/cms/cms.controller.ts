import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CmsService } from './cms.service';

@Controller('api/v1/cms')
export class CmsController {
  constructor(private readonly service: CmsService) {}
  @Post('pages') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) upsert(@Body() body: any) { return this.service.upsert(body); }
  @Get('pages/:slug') get(@Param('slug') slug: string) { return this.service.getBySlug(slug); }
}
