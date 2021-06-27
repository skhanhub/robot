// This file contains the runCommands class
import { promises } from 'fs';
import ToyRobot, { ActionMap } from './toyRobot';


type  Position = {
  X: number,
  Y: number,
  F: string,
}

type ReturnPosition = {
  valid: boolean,
  position: Position
}

export default class runCommands {
  toyRobot: ToyRobot;
  commands: Array<string>;
  actionMap: ActionMap;
  print: boolean;

  constructor(toyRobot = new ToyRobot(), commands = [], print = false){

    this.toyRobot = toyRobot;
    this.commands = commands;
    this.print = print;
    this.actionMap = toyRobot.GetActionMap();
  }
  //Method for setting an array of commands
  SetCommands = (commands: Array<string>) => this.commands = commands;
  /*
  Method for reading the commands for the robot from a file
  The Method takes the path to a file as the argument
  The Method returns the commands as an array
  */
  GetCommandsFromFile = async (path: string): Promise<Array<string>> => {

    console.log(`Reading commands from ${path}`)
    const data: string = await promises.readFile(path, 'utf8');

    if (!data){
      this.commands = [];
      return [];
    }
    // One command per line. Filter out empty lines
    this.commands = data.split('\n').filter( command => command !== '');
    return this.commands;
  }

} // End of class
