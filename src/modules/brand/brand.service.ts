import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: any) { return this.prisma.brand.create({ data: body }); }
  findAll() { return this.prisma.brand.findMany(); }
  update(id: string, body: any) { return this.prisma.brand.update({ where: { id }, data: body }); }
  remove(id: string) { return this.prisma.brand.delete({ where: { id } }); }
}
