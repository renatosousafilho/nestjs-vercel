import { Controller, Get } from '@nestjs/common';

@Controller('passengers')
export class PassengersController {
  @Get()
  getPassengers() {
    return ['John Doe', 'Jane Doe'];
  }
}
