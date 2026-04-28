import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { makeSlug } from 'src/utils/slug';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: any) {
    return this.prisma.product.create({ data: { ...body, slug: makeSlug(body.name) } });
  }

  async findAll(query: any) {
    const where: any = {};
    if (query.search) where.name = { contains: query.search, mode: 'insensitive' };
    if (query.categoryId) where.categoryId = query.categoryId;
    if (query.status) where.status = query.status;

    return this.prisma.product.findMany({
      where,
      include: { images: true, category: true, brand: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  update(id: string, body: any) { return this.prisma.product.update({ where: { id }, data: body }); }
  remove(id: string) { return this.prisma.product.delete({ where: { id } }); }
}
