import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('/')
  async getAllContents() {
    return await this.contentService.getAllContents();
  }
}
