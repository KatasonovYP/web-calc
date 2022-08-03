import ACTIONS from "../actions";

interface digitButtonProps {
  dispatch: Function,
  digit: string,
}

function DigitButton({ dispatch, digit }: digitButtonProps) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
