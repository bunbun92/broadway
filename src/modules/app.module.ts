import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmConfigService } from '../config/typeorm.config.service';
import { ContentModule } from './content.module';
import { OrderSeatsModule } from './order-seats.module';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from '../config/jwt.config.service';
import { AuthMiddleware } from '../auth/auth.middleware';
import { KopisApiModule } from '../kopis-api/kopis-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useClass: JwtConfigService,
      inject: [ConfigService],
    }),
    ContentModule,
    UserModule,
    OrderSeatsModule,
    KopisApiModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'user/update', method: RequestMethod.PUT });
  }
}
