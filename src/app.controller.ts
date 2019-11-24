import { Controller, Get, Body, Header, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Guest } from './guest.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Header('Access-Control-Allow-Origin', '*')
  @Get('guestlist')
  getGuestlist(): Promise<Guest> {
    return this.appService.getGuests();
  }

  @Header('Access-Control-Allow-Origin', '*')
  @Post('add-guest')
  addGuest(@Body() guest: Guest): Promise<Guest> {
    return this.appService.addGuest(guest);
  }

  @Header('Access-Control-Allow-Origin', '*')
  @Post('remove-guest')
  removeGuest(@Body('id') id: string): Promise<Guest> {
    return this.appService.removeGuest(id);
  }
}
