// This file contains the ToyRobot class
export type LookUpDetails = {
  X: number,
  Y: number,
  Left: string,
  Right: string,
}

export type LookUp = {
  [north: string]: LookUpDetails,
  south: LookUpDetails,
  east: LookUpDetails,
  west: LookUpDetails,
}

export type  Position = {
  X: number,
  Y: number,
  F: string,
}

export type ReturnPosition = {
  valid: boolean,
  position: Position
}

export type ActionMap = {
  [key: string]: (...args: Position[]) => ReturnPosition
}

export const defaultPosition = {
  X: 0,
  Y: 0,
  F: 'North',
}

export const defaultDirectionLookUp = {
  north: {X: 0, Y: 1, Left: 'West', Right: 'East'},
  south: {X: 0, Y: -1, Left: 'East', Right: 'West'},
  east: {X: 1, Y: 0, Left: 'North', Right: 'South'},
  west: {X: -1, Y: 0, Left: 'South', Right: 'North'},
}

// Class for simulating a toy robot
export default class ToyRobot {
  directionLookUp: LookUp;
  position: Position;
  valid: boolean;
  dimention: number;

  constructor(
    directionLookUp = defaultDirectionLookUp,
    position = defaultPosition,
    valid = false,
    dimention = 5
  ){
    this.directionLookUp = directionLookUp;
    this.position = position;
    this.valid = valid;
    this.dimention = dimention;
  }
  /*
  Method for validating a potential robot position
  The Method takes a position object
  The Method returns a boolean
  */
  private Validate = (position: Position): boolean =>{

    return position.X <= this.dimention - 1 && position.X >= 0 &&
      position.Y <= this.dimention - 1 && position.Y >= 0 &&
      this.directionLookUp[position.F.toLocaleLowerCase()] !== undefined
  }

  /*
  Method for placing the robot on the tabletop
  The Method takes a position object
  The Method returns a ReturnPosition object
  */
  Place = (position: Position = defaultPosition): ReturnPosition => {

    if(!this.Validate(position)){
      console.log(`Invalid position! Make sure both X and Y coordinates are between 0 and ${this.dimention-1} and F is either North, South, East, West`)
      return this.GetPosition();
    }

    position.F = position.F[0].toUpperCase()+position.F.slice(1).toLocaleLowerCase();
    this.position = position;
    this.valid = true

    return this.GetPosition();
  }
  /*
  Method for moving the robot
  The Method does not take any argument
  The Method returns a ReturnPosition object
  */
  Move = (): ReturnPosition => {

    if(!this.valid)
      return this.GetPosition();

    const NEW_POSITION = {...this.position};
    NEW_POSITION.X = NEW_POSITION.X + this.directionLookUp[NEW_POSITION.F.toLocaleLowerCase()].X;
    NEW_POSITION.Y = NEW_POSITION.Y + this.directionLookUp[NEW_POSITION.F.toLocaleLowerCase()].Y;

    if(!this.Validate(NEW_POSITION)){
      console.log(`The robot cannot move any further. Otherwise, it will fall off the table. Try a different direction.`)
      return {
        valid: false,
        position: this.position,
      };
    }

    this.position = NEW_POSITION;

    return this.GetPosition();
  }
 /*
  Method for rotating the robot 90 degrees to the left (anticlockwise)
  The Method does not take any argument
  The Method returns a ReturnPosition object
  */
  Left = (): ReturnPosition => {

    if(!this.valid)
      return this.GetPosition();
    // Look up the new face for a left rotation (F) from the lookup table
    this.position.F = this.directionLookUp[this.position.F.toLocaleLowerCase()].Left

    return this.GetPosition();
  }
  /*
  Method for rotating the robot 90 degrees to the right (clockwise)
  The Method does not take any argument
  The Method returns a ReturnPosition object
  */
  Right = (): ReturnPosition => {

    if(!this.valid)
      return this.GetPosition();
    // Look up the new face for a right rotation (F) from the lookup table
    this.position.F = this.directionLookUp[this.position.F.toLocaleLowerCase()].Right

    return this.GetPosition();
  }
  /*
  Method getting the current position of the robot
  The Method does not take any argument
  The Method returns a ReturnPosition object
  */
  GetPosition = (): ReturnPosition => (
    {
      valid: this.valid,
      position: this.position,
    }
  )


  /*
  Method getting a hashmap with the keys being the action name and the values are the methods
  The Method does not take any argument
  The Method returns an object
  */
  GetActionMap = (): ActionMap =>
  {
    return {
      place: this.Place,
      move: this.Move,
      left: this.Left,
      right: this.Right,
      report: this.GetPosition,
    }
  }// End GetActionMap
}// End Class
