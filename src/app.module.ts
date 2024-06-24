import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    PassengersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASS || 'postgres',
      database: process.env.POSTGRES_NAME || 'trybecar',
      synchronize: true,
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
