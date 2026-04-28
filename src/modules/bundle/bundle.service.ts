import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class BundleService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: any) { return this.prisma.bundle.create({ data: { name: body.name, discountType: body.discountType, discountValue: body.discountValue, items: { create: body.items || [] } }, include: { items: true } }); }
  list() { return this.prisma.bundle.findMany({ include: { items: { include: { product: true } } } }); }
}
