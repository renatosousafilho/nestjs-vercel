import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Passenger from './passenger.model';

type CreatePassengerDto = {
  name: string;
  email: string;
  phone: string;
};

@Injectable()
export class PassengersService {
  constructor(
    @InjectModel(Passenger)
    private passengerModel: typeof Passenger,
  ) {}

  async findAll(): Promise<Passenger[]> {
    return this.passengerModel.findAll();
  }

  async create(passenger: CreatePassengerDto): Promise<Passenger> {
    return this.passengerModel.create(passenger);
  }
}
