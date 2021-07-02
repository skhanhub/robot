// This file contains the top level application
import RunCommands from "./services/runCommands";
import configs from "../config";

// Get file path from the arguments
const PATH_TO_COMMAND_FILE = process.argv[2];
const CONFIG = configs.production;
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


console.info(`Welcome to the ${CONFIG.appName}`);

const runCommands = new RunCommands();
// If a file path provided as an argument then run the commands from the file.
// Otherwise, run the commands from the terminal.
try{
  if(PATH_TO_COMMAND_FILE){
    runCommands.FromFile(PATH_TO_COMMAND_FILE);
  }
  else{
    console.info(INSTRUCTION);
    runCommands.FromTerminal();
  }
} catch (err) {
  console.error(err.message)
}
