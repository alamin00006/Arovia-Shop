import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}
  create(userId: string, body: any) { return this.prisma.review.create({ data: { ...body, userId, approved: false } }); }
  approve(id: string, approved: boolean) { return this.prisma.review.update({ where: { id }, data: { approved } }); }
  byProduct(productId: string) { return this.prisma.review.findMany({ where: { productId, approved: true } }); }
}
