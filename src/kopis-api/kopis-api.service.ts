import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KopisApi } from '../entities/kopisApi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KopisApiService {
  constructor(
    @InjectRepository(KopisApi) private kopisApiRepository: Repository<KopisApi>
  ) {}

  // async getApi(result){
  //     const newResult = new KopisApi();
  //     return await {"id": 1};
  // }

  async kopisCreate(data): Promise<KopisApi | string> {
    console.log(data);
    return 'success';
    // return await this.kopisApiRepository.save({
    //   mt20id: data [ ]
    //   prfnm: data
    //   prfpdfrom:
    //   prfpdto:
    //   fcltynm:
    //   poster:
    //   genrenm:
    //   prfstate:
    //   openrun:

    // });
  }
}

// 1. json  변환/ | json api
// 2. save
// 3. 벌크 insert check
