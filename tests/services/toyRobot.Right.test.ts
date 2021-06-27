
import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the Right method for the ToyRobot class', () => {

  test('Should set position to 0, 0, East', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'North',
    }
    const END_POSITION = {
      X: 0,
      Y: 0,
      F: 'East',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Right();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });


  test('Should set position to 0, 0, South', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'East',
    }
    const END_POSITION = {
      X: 0,
      Y: 0,
      F: 'South',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Right();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });

  test('Should set position to 0, 0, West', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'South',
    }
    const END_POSITION = {
      X: 0,
      Y: 0,
      F: 'West',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Right();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });

  test('Should set position to 0, 0, North', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'West',
    }
    const END_POSITION = {
      X: 0,
      Y: 0,
      F: 'North',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Right();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });

})
