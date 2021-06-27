import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the GetActionMap function', () => {

  test('Should return all valid actions for the robot', () => {

    //Arrange
    const toyRobot = new ToyRobot();

    //Act
    const RESULT =  toyRobot.GetActionMap();

    //Assert
    expect(Object.keys(RESULT)).toContain('left');
  });

})
