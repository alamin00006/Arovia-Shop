import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { BrandService } from './brand.service';

@Controller('api/v1/brands')
export class BrandController {
  constructor(private readonly service: BrandService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) create(@Body() body: any) { return this.service.create(body); }
  @Get() findAll() { return this.service.findAll(); }
  @Patch(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) remove(@Param('id') id: string) { return this.service.remove(id); }
}
