import { Command } from './Command';
import { LightBulb }  from './Lightbulb';

export class LightOffCommand implements Command {
    lightBulb: LightBulb;

    constructor(lightBulb : LightBulb) { 
        this.lightBulb = lightBulb
    };
    
    execute() : void { 
        this.lightBulb.off();
    };
};