import { Injectable } from '@nestjs/common';
import { Guest } from './guest.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

  constructor(@InjectModel('Guest') private readonly guestModel: Model<Guest>) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async addGuest(guest: Guest): Promise<Guest> {
    const newGuest = new this.guestModel(guest);
    return await newGuest.save();
  }

  async removeGuest(id: string): Promise<Guest> {
    const guest = await this.guestModel.findByIdAndRemove(id);
    return guest;
  }

  async getGuests(): Promise<Guest> {
    return await this.guestModel.find().exec();
  }
}
