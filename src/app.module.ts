import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BdsmRolesModule } from './modules/bdsm-roles/bdsm-roles.module';

console.log(process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register(),
    DatabaseModule,
    UsersModule,
    BdsmRolesModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
