import { join } from "path";
import { existsSync } from 'fs';
import Orchestrator from "./orchestrator";

const VALID_EXIT_COMMANDS = ['exit', 'e', 'quit', 'q'];

export default class RunCommands {
  orchestrator: Orchestrator

  constructor(orchestrator = new Orchestrator()) {
    this.orchestrator = orchestrator;
  }
  /*
    Async function for running a set of commands from the file
    The function takes the path to the file as an argument
    The function does not return anything
  */
  FromFile = async (pathToCommandFile: string) => {

    const ABSOLUTEPATH = join(__dirname, pathToCommandFile);
    if (!existsSync(ABSOLUTEPATH)) {
      throw new Error(`${ABSOLUTEPATH} does not exist`)
    }
    // Switch on additional logging
    this.orchestrator.togglePrint();
    await this.orchestrator.GetCommandsFromFile(ABSOLUTEPATH)
    this.orchestrator.RunCommands();
  }
  /*
    Function for running a set of commands from the terminal
    The function does not take any arguments
    The function does not return anything
  */
  FromTerminal = () => {

    const STDIN = process.openStdin();
    // Add a listner to the terminal for reading commands
    STDIN.addListener("data", input => {

      const COMMAND = input.toString().trim().toLocaleLowerCase();
      // Exit if a valid exit command entered
      if(VALID_EXIT_COMMANDS.includes(COMMAND)){
        console.info('Goodbye!')
        process.exit();
      }

      this.orchestrator.RunCommand(COMMAND);
    });
  }
}
