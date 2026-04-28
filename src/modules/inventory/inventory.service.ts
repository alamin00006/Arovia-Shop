import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}
  async adjust(productId: string, delta: number, note?: string) {
    const product = await this.prisma.product.findUnique({ where: { id: productId } });
    if (!product) throw new NotFoundException('Product not found');
    const updated = await this.prisma.product.update({ where: { id: productId }, data: { stockQuantity: product.stockQuantity + delta } });
    await this.prisma.inventoryLog.create({ data: { productId, delta, note } });
    return updated;
  }
  lowStock(threshold = 10) { return this.prisma.product.findMany({ where: { stockQuantity: { lte: threshold } } }); }
}
