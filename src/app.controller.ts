import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AdvancedformDto } from './dto/advancedform.dto';
import { SimpleformDto } from './dto/simpleform.dto';


@Controller()
export class AppController {

 
  constructor(private readonly appService: AppService) {}



@Post('simpleformdata')
 simpleformdata(@Body() body: SimpleformDto){
   return this.appService.create(body);
}
@Post('advancedformdata')
advancedformdata(@Body() body: AdvancedformDto){
 return this.appService.create(body);
}

}
