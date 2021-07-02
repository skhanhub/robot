import * as path from "path";
import Orchestrator from '../../src/services/orchestrator';

jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn().mockResolvedValue(`
      PLACE 0,0,NORTH
      MOVE
      REPORT
      LEFT
      MOVE
      REPORT
    `.replace(/^ +| +$/gm, "")), // removes whitespaces but keeps new line
  },
}));

describe('Tests for the GetCommandsFromFile method for the RunCommands class', () => {

  test('Should return all the commands from the given file', async () => {

    //Arrange
    const COMMANDS = [
      'PLACE 0,0,NORTH',
      'MOVE',
      'REPORT',
      'LEFT',
      'MOVE',
      'REPORT',
    ]
    const runCommands = new Orchestrator();

    //Act
    const RESULT = await runCommands.GetCommandsFromFile(path.join(__dirname, '../commands/testCommands.txt'));

    //Assert
    expect(RESULT).toEqual(COMMANDS);
    expect.assertions(1);
  });

})
