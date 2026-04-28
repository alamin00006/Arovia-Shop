import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ZodValidationPipe } from 'src/shared/zod-validation.pipe';
import { createCategorySchema } from './category.validation';
import { CategoryService } from './category.service';

@Controller('api/v1/categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}
  @Post() @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) @UsePipes(new ZodValidationPipe(createCategorySchema)) create(@Body() body: any) { return this.service.create(body); }
  @Get() findAll() { return this.service.findAll(); }
  @Patch(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.STAFF) update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN) remove(@Param('id') id: string) { return this.service.remove(id); }
}
