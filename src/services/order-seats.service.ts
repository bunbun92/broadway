import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/entities/content.entity';
import { OrderList } from 'src/entities/order-list.entity';
import { Seat } from 'src/entities/seats.entity';
import { TimeSale } from 'src/entities/time-sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderSeatsService {
  constructor(
    @InjectRepository(Content) private contentRepository: Repository<Content>,
    @InjectRepository(Seat) private seatRepository: Repository<Seat>,
    @InjectRepository(TimeSale)
    private timeSaleRepository: Repository<TimeSale>,
    @InjectRepository(OrderList)
    private orderListRepository: Repository<OrderList>
  ) {}

  async getAContent(contentId: number) {
    const content = await this.contentRepository.findOne({
      where: {
        deletedAt: null,
        id: contentId,
      },
    });

    return content;
  }

  async checkTimeSale(contentId: number) {
    let today: Date = new Date();
    let timeNow: string = this.dateToStringForQuery(today);

    let query =
      `select * from timeSale ts
    left join contents c on c.id = ts.contentId
    where ts.` +
      `end` +
      ` > "${timeNow}" and ts.contentId = ${contentId}`;

    const content = await this.timeSaleRepository.query(query);

    // console.log(today + '//' + timeNow);

    // const content = await this.timeSaleRepository.findOne({
    //   where: {
    //     deletedAt: null,
    //     id: contentId,
    //   },
    //   relations: ['content'],
    // });

    // console.log(timeNow < content.end);
    // console.log(timeNow > content.end);
    // console.log(timeNow === content.end);

    // console.log(this.dateToStringForQuery(today));

    return content;
  }

  dateToStringForQuery(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const result = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return result;
  }
}
