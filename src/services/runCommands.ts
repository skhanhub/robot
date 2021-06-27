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

} // End of class
