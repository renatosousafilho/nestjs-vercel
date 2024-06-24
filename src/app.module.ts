import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';
import { SequelizeModule } from '@nestjs/sequelize';
import * as pg from 'pg';
import Passenger from './passengers/passenger.model';

@Module({
  imports: [
    PassengersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DATABASE || 'trybecar',
      synchronize: true,
      dialectModule: pg,
      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //     rejectUnauthorized: false,
      //   },
      // },
      models: [Passenger],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
