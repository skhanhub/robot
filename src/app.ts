//This file contains the top level application
import { join } from "path";
import { existsSync } from 'fs';
import RunCommands from './services/runCommands';
import configs from "../config";

// Get file path from the arguments
const PATH_TO_COMMAND_FILE = process.argv[2];
const CONFIG = configs['production'];
const VALID_EXIT_COMMANDS = ['exit', 'e', 'quit', 'q'];
const INSTRUCTION = `
Valid commands for the robot are,
Place X, Y, F
MOVE
LEFT
RIGHT
REPORT
Start by placing the robot using Place X, Y, F where X and Y is between 0 and 4 and F can be North, South, East or West
Enter q or quit to exit
`;

const runCommands = new RunCommands()
console.log(`Welcome to the ${CONFIG.appName}`);

/*
  Async function for running a set of commands from the file
  The function takes the path to the file as an argument
  The function does not return anything
*/
const runCommandsFromFile = async (pathToCommandFile: string) => {

  const ABSOLUTEPATH = join(__dirname, pathToCommandFile);
  if (!existsSync(ABSOLUTEPATH)) {
    console.log(`${ABSOLUTEPATH} does not exist`)
    return;
  }
  // Switch on additional logging
  runCommands.togglePrint();
  await runCommands.GetCommandsFromFile(ABSOLUTEPATH)
  runCommands.RunCommands();
}
