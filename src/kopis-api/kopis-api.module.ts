import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KopisApi } from '../entities/kopisApi.entity';
import { KopisApiController } from './kopis-api.controller';
import { KopisApiService } from './kopis-api.service';

@Module({
  imports: [TypeOrmModule.forFeature([KopisApi])],
  controllers: [KopisApiController],
  providers: [KopisApiService],
})
export class KopisApiModule {}
