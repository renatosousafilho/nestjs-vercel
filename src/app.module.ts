import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';
import { SequelizeModule } from '@nestjs/sequelize';
import config = require('./database/config/config');

console.log(config[process.env.NODE_ENV || 'development']);

@Module({
  imports: [
    PassengersModule,
    SequelizeModule.forRoot({
      ...config[process.env.NODE_ENV || 'development'],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
