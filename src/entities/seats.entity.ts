import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'broadway', name: 'seats' })
export class Seat {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { length: 10 })
  seat: string;

  @Column('varchar', { length: 100 })
  theater: string;

  @Column('int')
  contentId: number;

  @Column('int')
  performInfo: number;

  @Column('int')
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
