import { Simple } from './models/simple.interface';
import { User } from './models/user.interface';
export declare class AppService {
    [x: string]: any;
    getHello(): string;
    create(user: User): Promise<User>;
    generate(simple: Simple): Promise<Simple>;
}
