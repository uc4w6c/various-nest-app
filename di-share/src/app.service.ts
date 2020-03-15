import { Injectable, Scope } from '@nestjs/common';

@Injectable(
    // { scope: Scope.REQUEST }
)
export class AppService {
  private name: string;

  async setName(name: string) {
    this.name = name;
    console.log('wait start');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('wait end');
  }

  getHello() {
    return `Hello ${this.name}!`;
  }
}
