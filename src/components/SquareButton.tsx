interface SquareButtonProps {
  sym: string
  setExpr: Function
}

function SquareButton({ sym, setExpr }: SquareButtonProps) {
  return (
    <button
      className="px-2 py-4 border bg-green-300 hover:bg-green-200 text-2xl rounded-2xl"
      onClick={() => setExpr((prev: string) => prev !== "0" ? prev + sym : sym)}
    >
      {sym}
    </button>
  );
}

export default SquareButton;