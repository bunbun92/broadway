import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'broadway', name: 'kopisApi' })
export class KopisApi {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { length: 30 })
  mt20id: string; //공연 ID

  @Column('varchar', { length: 50 })
  prfnm: string; //공연명

  @Column('varchar', { length: 30 })
  prfpdfrom: string; //공연시작일

  @Column('varchar', { length: 30 })
  prfpdto: string; //공연종료일

  @Column('varchar', { length: 30 })
  fcltynm: string; //공연장명

  @Column('varchar', { length: 300 })
  poster: string; //포스트이미지경로

  @Column('varchar', { length: 30 })
  genrenm: string; //공연장르

  @Column('varchar', { length: 30 })
  prfstate: string; //공연상태

  @Column('varchar', { length: 10 })
  openrun: string; // 오픈런

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
