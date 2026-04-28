import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { envSchema } from './config/env.validation';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandModule } from './modules/brand/brand.module';
import { ProductModule } from './modules/product/product.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { CartModule } from './modules/cart/cart.module';
import { WishlistModule } from './modules/wishlist/wishlist.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { OrderModule } from './modules/order/order.module';
import { ReviewModule } from './modules/review/review.module';
import { BannerModule } from './modules/banner/banner.module';
import { CmsModule } from './modules/cms/cms.module';
import { FlashSaleModule } from './modules/flashSale/flash-sale.module';
import { BundleModule } from './modules/bundle/bundle.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env)
    }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    AuthModule,
    UserModule,
    CategoryModule,
    BrandModule,
    ProductModule,
    InventoryModule,
    CartModule,
    WishlistModule,
    CouponModule,
    OrderModule,
    ReviewModule,
    BannerModule,
    CmsModule,
    FlashSaleModule,
    BundleModule,
    DeliveryModule,
    ReportModule
  ]
})
export class AppModule {}
