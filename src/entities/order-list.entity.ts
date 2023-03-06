import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'broadway', name: 'orderList' })
export class OrderList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int')
  userId: number;

  @Column('float')
  timeSaleRate: number;

  @Column('int')
  contentId: number;

  @Column('int')
  performInfo: number;

  @Column('tinyint')
  orderStatus: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
