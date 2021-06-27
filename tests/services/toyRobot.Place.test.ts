
import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the Place method for the ToyRobot class', () => {

  test('Should set the current position of the robot to 3, 3, North and set valid to true', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 3,
      Y: 3,
      F: 'North',
    }

    //Act

    const RESULT = toyRobot.Place(POSITION);

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(POSITION);

  });



  test('Should return an object with valid set to false if invalid X is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 6,
      Y: 3,
      F: 'North',
    }

    //Act
    const RESULT = toyRobot.Place(POSITION);

    //Assert
    expect(RESULT.valid).toBeFalsy();

  });

  test('Should return an object with valid set to false if invalid Y is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 5,
      Y: -1,
      F: 'North',
    }

    //Act
    const RESULT = toyRobot.Place(POSITION);

    //Assert
    expect(RESULT.valid).toBeFalsy();

  });

  test('Should return an object with valid set to false if invalid F is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 5,
      Y: 5,
      F: 'Mouth',
    }

    //Act
    const RESULT = toyRobot.Place(POSITION);

    //Assert
    expect(RESULT.valid).toBeFalsy();

  });

})
