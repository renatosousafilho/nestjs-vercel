import { Controller, Get } from '@nestjs/common';

@Controller('passengers')
export class PassengersController {
  @Get()
  getPassengers() {
    return ['Teste'];
  }
}
