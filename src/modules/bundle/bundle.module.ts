import { Module } from '@nestjs/common';
import { BundleController } from './bundle.controller';
import { BundleService } from './bundle.service';
import { PrismaService } from 'src/shared/prisma.service';

@Module({ controllers: [BundleController], providers: [BundleService, PrismaService] })
export class BundleModule {}
