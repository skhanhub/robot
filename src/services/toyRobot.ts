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
