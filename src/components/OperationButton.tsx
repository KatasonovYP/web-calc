import ACTIONS from "../actions";

interface operationButtonProps {
  dispatch: Function,
  operation: string,
}

function OperationButton({ dispatch, operation }: operationButtonProps) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
