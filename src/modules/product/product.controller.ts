import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ZodValidationPipe } from 'src/shared/zod-validation.pipe';
import { createProductSchema } from './product.validation';
import { ProductService } from './product.service';

@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly service: ProductService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) @UsePipes(new ZodValidationPipe(createProductSchema)) create(@Body() body: any) { return this.service.create(body); }
  @Get() findAll(@Query() query: any) { return this.service.findAll(query); }
  @Patch(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) remove(@Param('id') id: string) { return this.service.remove(id); }
}
