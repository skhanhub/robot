
import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the Report method for the ToyRobot class', () => {

  test('Should report position 0, 0, North with the valid flag set to false', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'North',
    }

    //Act
    const RESULT = toyRobot.Report();

    //Assert
    expect(RESULT.valid).toBeFalsy();
    expect(RESULT.position).toEqual(POSITION);

  });

})
