import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from 'src/entities/seats.entity';
import { OrderSeatsController } from '../controllers/order-seats.controller';
import { OrderSeatsService } from '../services/order-seats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seat])],
  controllers: [OrderSeatsController],
  providers: [OrderSeatsService],
})
export class OrderSeatsModule {}
