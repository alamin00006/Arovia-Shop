import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { makeSlug } from 'src/utils/slug';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(payload: any) { return this.prisma.category.create({ data: { ...payload, slug: makeSlug(payload.name) } }); }
  findAll() { return this.prisma.category.findMany({ include: { children: true } }); }
  update(id: string, payload: any) { return this.prisma.category.update({ where: { id }, data: payload }); }
  remove(id: string) { return this.prisma.category.delete({ where: { id } }); }
}
