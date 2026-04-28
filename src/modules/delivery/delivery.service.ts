import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly prisma: PrismaService) {}
  createArea(body: any) { return this.prisma.deliveryArea.create({ data: body }); }
  listAreas() { return this.prisma.deliveryArea.findMany({ where: { isActive: true } }); }
}
