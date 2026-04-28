import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class FlashSaleService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: any) { return this.prisma.flashSale.create({ data: { name: body.name, startsAt: new Date(body.startsAt), endsAt: new Date(body.endsAt), products: { create: body.products || [] } }, include: { products: true } }); }
  active() { return this.prisma.flashSale.findMany({ where: { startsAt: { lte: new Date() }, endsAt: { gte: new Date() } }, include: { products: true } }); }
}
