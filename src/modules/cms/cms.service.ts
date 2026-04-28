import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class CmsService {
  constructor(private readonly prisma: PrismaService) {}
  upsert(body: any) { return this.prisma.cMSPage.upsert({ where: { slug: body.slug }, create: body, update: body }); }
  getBySlug(slug: string) { return this.prisma.cMSPage.findUnique({ where: { slug } }); }
}
