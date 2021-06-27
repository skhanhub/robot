import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the Move method for the ToyRobot class', () => {



  test('Should set position to 0, 1, North with the valid flag set to true', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'North',
    }
    const END_POSITION = {
      X: 0,
      Y: 1,
      F: 'North',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Move();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });


  test('Should set position to 1, 0, East with the valid flag set to true', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'East',
    }
    const END_POSITION = {
      X: 1,
      Y: 0,
      F: 'East',
    }
    const toyRobot = new ToyRobot();



    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Move();

    //Assert
    expect(RESULT.valid).toBeTruthy();
    expect(RESULT.position).toEqual(END_POSITION);

  });

  test('Should return a valid flag set to fasle', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'South',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Move();

    //Assert
    expect(RESULT.valid).toBeFalsy();

  });

  test('Should return a valid flag set to fasle', () => {

    //Arrange
    const POSITION = {
      X: 0,
      Y: 0,
      F: 'West',
    }
    const toyRobot = new ToyRobot();

    //Act
    toyRobot.Place(POSITION);
    const RESULT = toyRobot.Move();

    //Assert
    expect(RESULT.valid).toBeFalsy();

  });

})
