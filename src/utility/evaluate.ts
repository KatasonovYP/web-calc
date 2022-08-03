import { ICalculatorState } from "../models";

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: ICalculatorState): string {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      computation = "";
  }
  return computation.toString();
}

export default evaluate;
