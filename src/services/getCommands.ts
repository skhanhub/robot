
import { promises } from 'fs';

export default class GetCommands {
  /*
  Method for reading the commands for the robot from a file
  The Method takes the path to a file as the argument
  The Method returns the commands as an array
  */
  static FromFile = async (path: string): Promise<string[]> => {

    console.info(`Reading commands from ${path}`)
    const data: string = await promises.readFile(path, 'utf8');

    if (!data){
      throw new Error("No commands found")
    }
    // One command per line. Filter out empty lines
    return data.split('\n').filter( command => command !== '');
  }
}
