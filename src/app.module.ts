import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';

@Module({
  imports: [PassengersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
