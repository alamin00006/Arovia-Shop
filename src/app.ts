import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './middlewares/all-exceptions.filter';
import { ResponseInterceptor } from './middlewares/response.interceptor';
import { PrismaService } from './shared/prisma.service';

export const createApp = async () => {
  const app = await NestFactory.create(AppModule);  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  app.use(helmet());
  app.enableCors({ origin: true, credentials: true });
  app.use(pinoHttp());

  const prisma = app.get(PrismaService);
  await prisma.enableShutdownHooks(app);

  return app;
};
