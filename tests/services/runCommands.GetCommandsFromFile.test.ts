import * as path from "path";
import RunCommands from '../../src/services/runCommands';

describe('Tests for the GetCommandsFromFile method for the RunCommands class', () => {

  test('Should return all the commands from the given file', async () => {

    //Arrange
    expect.assertions(1);
    const COMMANDS = [
      'PLACE 0,0,NORTH',
      'MOVE',
      'REPORT',
      'LEFT',
      'MOVE',
      'REPORT',
    ]
    const runCommands = new RunCommands();

    //Act
    const RESULT = await runCommands.GetCommandsFromFile(path.join(__dirname, '../commands/testCommands.txt'));

    //Assert
    expect(RESULT).toEqual(COMMANDS);

  });

})
