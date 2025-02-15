import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('SERVICE_A') private readonly clientA: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const resultA = await lastValueFrom(
      this.clientA.send({ cmd: 'getHello' }, 'hi'),
    );
    // const resultB = await this.clientB.send('getHello', '').toPromise();
    return this.appService.getHello(resultA);
  }
}
