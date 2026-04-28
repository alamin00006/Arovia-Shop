import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class BannerService {
  constructor(private readonly prisma: PrismaService) {}
  create(body: any) { return this.prisma.banner.create({ data: body }); }
  list() { return this.prisma.banner.findMany({ where: { isActive: true } }); }
}
