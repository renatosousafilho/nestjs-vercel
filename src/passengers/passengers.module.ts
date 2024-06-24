import { Module } from '@nestjs/common';
import { PassengersController } from './passengers.controller';
import { PassengersService } from './passengers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Passenger from './passenger.model';

@Module({
  imports: [SequelizeModule.forFeature([Passenger])],
  controllers: [PassengersController],
  providers: [PassengersService],
})
export class PassengersModule {}
