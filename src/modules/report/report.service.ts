import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}
  async dashboard() {
    const [totalOrders, totalCustomers, salesAgg, lowStockProducts] = await Promise.all([
      this.prisma.order.count(),
      this.prisma.user.count({ where: { role: 'CUSTOMER' } }),
      this.prisma.order.aggregate({ _sum: { total: true } }),
      this.prisma.product.findMany({ where: { stockQuantity: { lte: 10 } }, take: 20 })
    ]);

    return {
      totalOrders,
      totalCustomers,
      totalSales: salesAgg._sum.total ?? 0,
      lowStockProducts
    };
  }
}
