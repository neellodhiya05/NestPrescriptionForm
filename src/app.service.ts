import { Injectable } from '@nestjs/common';
import { Simple } from './models/simple.interface';
import { User } from './models/user.interface';

@Injectable()
export class AppService {
  [x: string]: any;

  
  getHello(): string {
    return 'Neel lodhiya';
  }
  async create(user: User): Promise<User>{
    return (user); 
  }
  async generate(simple:Simple): Promise<Simple>{
    return(simple);
  }

}




