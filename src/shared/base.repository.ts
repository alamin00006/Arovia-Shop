import { PrismaService } from './prisma.service';

export abstract class BaseRepository {
  constructor(protected readonly prisma: PrismaService) {}

  protected buildPagination(query: any) {
    const page = Number(query.page || 1);
    const limit = Math.min(Number(query.limit || 20), 100);
    const skip = (page - 1) * limit;
    return { page, limit, skip };
  }
}
