
export const INVALID_POSITION = 'INVALID_POSITION';
export const INVALID_MOVE = 'INVALID_MOVE';

export default class ToyRobotError extends Error {
  type: string;

  constructor(message: string | undefined, type: string = INVALID_POSITION) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ToyRobotError)
    }

    this.type = type;
  }
}
