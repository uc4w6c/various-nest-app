import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private name:string;
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('name') name): Promise<string> {
    if (name) {
      await this.appService.setName(name);
      return this.appService.getHello();
    } else {
      new Error('name is must');
    }
  }

  @Get('test')
  async test(@Query('name') name): Promise<string> {
    this.name = name;
    console.log('wait start');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('wait end');
    return this.name;
  }
}
