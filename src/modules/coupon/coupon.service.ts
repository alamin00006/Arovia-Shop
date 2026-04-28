import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class CouponService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: any) { return this.prisma.coupon.create({ data: body }); }
  list() { return this.prisma.coupon.findMany(); }
  update(id: string, body: any) { return this.prisma.coupon.update({ where: { id }, data: body }); }
}
