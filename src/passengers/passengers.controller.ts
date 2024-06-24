import { Body, Controller, Get, Post } from '@nestjs/common';
import { PassengersService } from './passengers.service';

@Controller('passengers')
export class PassengersController {
  constructor(private passengersService: PassengersService) {}

  @Get()
  getPassengers() {
    return this.passengersService.findAll();
  }

  @Post()
  createPassenger(@Body() body: any) {
    const { name, email, phone } = body;
    return this.passengersService.create({ name, email, phone });
  }
}
