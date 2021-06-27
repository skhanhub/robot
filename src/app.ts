// This file contains the top level application
import { join } from "path";
import { existsSync } from 'fs';
import RunCommands from './services/runCommands';
import configs from "../config";

// Get file path from the arguments
const PATH_TO_COMMAND_FILE = process.argv[2];
const CONFIG = configs.production;
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
/*
  Function for running a set of commands from the terminal
  The function does not take any arguments
  The function does not return anything
*/
const runCommandsFromTerminal = () => {

  const STDIN = process.openStdin();
  // Add a listner to the terminal for reading commands
  STDIN.addListener("data", input => {

    const COMMAND = input.toString().trim().toLocaleLowerCase();
    // Exit if a valid exit command entered
    if(VALID_EXIT_COMMANDS.includes(COMMAND)){
      console.log('Goodbye!')
      process.exit();
    }

    runCommands.RunCommand(COMMAND);
  });
}
// If a file path provided as an argument then run the commands from the file.
// Otherwise, run the commands from the terminal.
if(PATH_TO_COMMAND_FILE){
  runCommandsFromFile(PATH_TO_COMMAND_FILE);
}
else{
  console.log(INSTRUCTION);
  runCommandsFromTerminal();
}
