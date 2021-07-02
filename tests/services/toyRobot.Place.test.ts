
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



  test('Should throw an error if invalid X is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 6,
      Y: 3,
      F: 'North',
    }

    //Assert
    expect(() => toyRobot.Place(POSITION)).toThrowError();
  });

  test('Should throw an error if invalid Y is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 5,
      Y: -1,
      F: 'North',
    }

    //Assert
    expect(() => toyRobot.Place(POSITION)).toThrowError();

  });

  test('Should throw error if invalid F is passed', () => {

    //Arrange
    const toyRobot = new ToyRobot();
    const POSITION = {
      X: 5,
      Y: 5,
      F: 'Mouth',
    }

    //Assert
    expect(() => toyRobot.Place(POSITION)).toThrowError();

  });

})
