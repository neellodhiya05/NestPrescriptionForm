import { AppService } from './app.service';
import { AdvancedformDto } from './dto/advancedform.dto';
import { SimpleformDto } from './dto/simpleform.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    simpleformdata(body: SimpleformDto): Promise<import("./models/user.interface").User>;
    advancedformdata(body: AdvancedformDto): Promise<import("./models/user.interface").User>;
}
