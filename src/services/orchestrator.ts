// This file contains the runCommands class
import ToyRobot, { ActionMap, ToyRobotReturn } from './toyRobot';

const radix = 10;

export default class Orchestrator {
  toyRobot: ToyRobot;
  commands: string[];
  actionMap: ActionMap;
  print: boolean;

  constructor(toyRobot = new ToyRobot(), commands = [], print = false){

    this.toyRobot = toyRobot;
    this.commands = commands;
    this.print = print;
    this.actionMap = toyRobot.GetActionMap();
  }
  // Method for setting an array of commands
  SetCommands = (commands: string[]) => this.commands = commands;
 /*
  Method for running a single command
  The Method takes a single command as a string
  The Method does not return anything
  */
  RunCommand = (command: string) =>{

    try {
      // Split based on either space or comma
      const temp = command.split(/[\s,]+/);
      const action = temp[0];
      const arg = temp.slice(1);
      if(!this.actionMap[action.toLocaleLowerCase()]){
        throw new Error(`${action} is not a valid command`);
      }
      else if(this.print){
        console.info(command)
      }
      if(action.toLocaleLowerCase() === 'place'){
        if(arg.length !== 3)
          throw new Error(`${action} takes 3 arguments, ${arg.length} is given`);
        else
          this.actionMap[action.toLocaleLowerCase()]({X: parseInt(arg[0], radix), Y: parseInt(arg[1], radix), F: arg[2]})
      } else {
        const result = this.actionMap[action.toLocaleLowerCase()]()
        if(result.message)
          console.info(result.message)
      }
    } catch(err) {
      console.error(err.message)
    }
  }
 /*
  Method for running a list of commands
  The Method does not take any arguments
  The Method returns the final position of the robot as a ReturnPosition object
  */
  RunCommands = (): ToyRobotReturn => {
    if(this.commands === []){
      throw new Error('No commands found')
    }
    this.commands.forEach(command => {
      this.RunCommand(command);
    });
    return this.toyRobot.GetPosition()
  }
  // Method for toggling the print property
  togglePrint = () => this.print = !this.print;
} // End of class
