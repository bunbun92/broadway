import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from 'src/entities/seats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderSeatsService {
  constructor(
    @InjectRepository(Seat) private orderSeatRepository: Repository<Seat>
  ) {}
}
