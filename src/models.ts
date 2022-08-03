export interface ICalculatorState {
  currentOperand: string;
  operation: string;
  previousOperand: string;
  overwrite: boolean;
}

export interface dispatchProps {
  type: string;
  payload: any;
}
