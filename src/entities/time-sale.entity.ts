import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'board', name: 'timeSale' })
export class TimeSale {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int')
  contentId: number;

  @Column('time')
  start: string;

  @Column('time')
  end: string;

  @Column('float')
  rate: number;

  @Column('int')
  performInfo: number;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
