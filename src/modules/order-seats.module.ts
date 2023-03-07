import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from 'src/entities/content.entity';
import { OrderList } from 'src/entities/order-list.entity';
import { Seat } from 'src/entities/seats.entity';
import { TimeSale } from 'src/entities/time-sale.entity';
import { OrderSeatsController } from '../controllers/order-seats.controller';
import { OrderSeatsService } from '../services/order-seats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Content, Seat, OrderList, TimeSale])],
  controllers: [OrderSeatsController],
  providers: [OrderSeatsService],
})
export class OrderSeatsModule {}
