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
