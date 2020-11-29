
import { LightBulb } from './Lightbulb';
import { LightOnCommand } from './LightOnCommand';
import { LightOffCommand } from './LightOffCommand';

const light = new LightBulb();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

lightOnCommand.execute();
lightOffCommand.execute();