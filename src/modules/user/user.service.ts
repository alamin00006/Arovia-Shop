import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  getProfile(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId }, include: { addresses: true } });
  }

  addAddress(userId: string, payload: any) {
    return this.prisma.address.create({ data: { ...payload, userId } });
  }

  adminCustomers(query: any) {
    return this.prisma.user.findMany({ where: { role: 'CUSTOMER' }, orderBy: { createdAt: 'desc' } });
  }

  toggleBlock(userId: string, isBlocked: boolean) {
    return this.prisma.user.update({ where: { id: userId }, data: { isBlocked } });
  }
}
