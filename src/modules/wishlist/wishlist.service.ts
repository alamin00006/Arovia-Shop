import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}
  add(userId: string, productId: string) { return this.prisma.wishlist.upsert({ where: { userId_productId: { userId, productId } }, update: {}, create: { userId, productId } }); }
  remove(userId: string, productId: string) { return this.prisma.wishlist.delete({ where: { userId_productId: { userId, productId } } }); }
  list(userId: string) { return this.prisma.wishlist.findMany({ where: { userId }, include: { product: true } }); }
}
