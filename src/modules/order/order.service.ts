import { Injectable } from '@nestjs/common';
import { OrderStatus, PaymentStatus } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async checkout(userId: string, payload: any) {
    const orderNumber = `ORD-${Date.now()}`;
    return this.prisma.order.create({
      data: {
        userId,
        orderNumber,
        addressId: payload.addressId,
        subtotal: payload.subtotal,
        discountAmount: payload.discountAmount || 0,
        deliveryCharge: payload.deliveryCharge || 0,
        total: payload.total,
        orderStatus: OrderStatus.PENDING,
        paymentStatus: PaymentStatus.UNPAID,
        items: { create: payload.items.map((i: any) => ({ productId: i.productId, quantity: i.quantity, unitPrice: i.unitPrice, totalPrice: i.totalPrice })) }
      },
      include: { items: true }
    });
  }

  adminOrders() { return this.prisma.order.findMany({ include: { items: true, user: true }, orderBy: { createdAt: 'desc' } }); }
  customerHistory(userId: string) { return this.prisma.order.findMany({ where: { userId }, include: { items: true }, orderBy: { createdAt: 'desc' } }); }
  track(orderNumber: string) { return this.prisma.order.findUnique({ where: { orderNumber }, include: { items: true } }); }
  updateStatus(id: string, orderStatus: OrderStatus) { return this.prisma.order.update({ where: { id }, data: { orderStatus } }); }
}
