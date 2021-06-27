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

// Class for simulating a toy robot
export default class ToyRobot {
  directionLookUp: LookUp;
  position: Position;
  valid: boolean;
  dimention: number;

  constructor(
    directionLookUp = {
      north: {X: 0, Y: 1, Left: 'West', Right: 'East'},
      south: {X: 0, Y: -1, Left: 'East', Right: 'West'},
      east: {X: 1, Y: 0, Left: 'North', Right: 'South'},
      west: {X: -1, Y: 0, Left: 'South', Right: 'North'},
    },
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
      return{
        valid: this.valid,
        position: this.position,
      };
    }

    position.F = position.F[0].toUpperCase()+position.F.slice(1).toLocaleLowerCase();
    this.position = position;
    this.valid = true

    return {
      valid: this.valid,
      position: this.position,
    };
  }

}// End Class
