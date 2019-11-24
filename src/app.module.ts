import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestSchema } from './schemas/guest.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/event-manager'),
    MongooseModule.forFeature([
      { name: 'Guest', schema: GuestSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
