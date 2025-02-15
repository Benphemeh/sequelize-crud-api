import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(serviceA: string): string {
    return `Service A says: ${serviceA}`;
  }
}
