import { Controller, Get } from '@nestjs/common';
import { KopisApiService } from './kopis-api.service';
import axios from 'axios';
import convert from 'xml-js';

@Controller('kopis-api')
export class KopisApiController {
  constructor(private readonly kopisApiService: KopisApiService) {}

  @Get('/kopis')
  async kopisCreate() {
    // axios request

    // axios({
    //   method : 'get',
    //   url:  'https://www.kopis.or.kr/openApi/restful/pblprfr?service=8ac72359a2b74f5f883f610f5d8df103&stdate=20230308&eddate=20231231&cpage=1&rows=1000';
    // }).then((res)=>{
    //   console.log(res)
    //   return await this.kopisApiService.kopisCreate();
    // })

    const request = require('request');
    let parseString = require('xml2js').parseString;

    request(
      'https://www.kopis.or.kr/openApi/restful/pblprfr?service=8ac72359a2b74f5f883f610f5d8df103&stdate=20230308&eddate=20231231&cpage=1&rows=10',
      function (error, response, body) {
        parseString(body, function (err, result) {
          let parseData = result;
          console.log('apseer');
          console.log(parseData.dbs.db[0]);
        });
      }
    );

    // const apiUrl =
    //   'https://www.kopis.or.kr/openApi/restful/pblprfr?service=8ac72359a2b74f5f883f610f5d8df103&stdate=20230308&eddate=20231231&cpage=1&rows=1000';

    // const result = await axios.get(encodeURI(apiUrl));
    // console.log(result);
    // const response = convert.xml2json(result.data, {
    //   compact: true,
    //   spaces: 4,
    // });
    // console.log(response);
    // const { data } = response;
    // console.log(data);

    return this.kopisApiService.kopisCreate([]);
  }
}
