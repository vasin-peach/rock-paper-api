import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // general using
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // production using
  if (process.env.NODE_ENV === 'production') {
    app.use(csurf());
    app.use(helmet());
    app.enableCors({ origin: process.env.CORS_ORIGIN });
  }

  await app.listen(3000);
}
bootstrap();
