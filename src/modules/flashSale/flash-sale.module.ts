import { Module } from '@nestjs/common';
import { FlashSaleController } from './flash-sale.controller';
import { FlashSaleService } from './flash-sale.service';
import { PrismaService } from 'src/shared/prisma.service';

@Module({ controllers: [FlashSaleController], providers: [FlashSaleService, PrismaService] })
export class FlashSaleModule {}
