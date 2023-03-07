import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { ContentModule } from './modules/content.module';
import { OrderSeatsModule } from './modules/order-seats.module';

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
    ContentModule,
    OrderSeatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
