import Orchestrator from '../../src/services/orchestrator';

describe('Tests for the RunCommands method for the RunCommands class', () => {

  test('The final position should be 0, 1, West and the valid flag should be true', () => {

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
    runCommands.SetCommands(COMMANDS);

    //Act
    const RESULT = runCommands.RunCommands();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual({X: 0, Y: 1, F: 'West'});

  });


  test('The final position should be 1, 0, South and the valid flag should be true', () => {

    //Arrange
    const COMMANDS = [
      'PLACE 0,6,NORTH',
      'MOVE',
      'REPORT',
      'PLACE 3,1,EAST',
      'LEFT',
      'MOVE',
      'REPORT',
      'PLACE 1,1,SOUTH',
      'MOVE',
      'REPORT',
    ]
    const runCommands = new Orchestrator();
    runCommands.SetCommands(COMMANDS);

    //Act
    const RESULT = runCommands.RunCommands();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual({X: 1, Y: 0, F: 'South'});

  });

  test('The valid flag should be false', () => {

    //Arrange
    // expect.assertions(1);
    const COMMANDS = [
      'PLACE -1,6,NORTH',
      'MOVE',
      'REPORT',
      'PLACE 6,1,EAST',
      'LEFT',
      'MOVE',
      'REPORT',
      'PLACE 9,1,SOUTH',
      'MOVE',
      'REPORT',
    ]
    const runCommands = new Orchestrator();
    runCommands.SetCommands(COMMANDS);

    //Act
    const RESULT = runCommands.RunCommands();

    //Assert
    expect(RESULT.valid).toBeFalsy();
  });

})


