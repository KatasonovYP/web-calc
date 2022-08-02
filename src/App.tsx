import { useState } from 'react';
import SquareButton from './components/SquareButton';

function App() {
  const [line, setLine] = useState("0")
  const cleanLine = () => setLine("0")
  const backspaceLine = () => setLine(prev => prev.length > 1 ? prev.slice(0, -1) : "0")
  const setAnswer = () => setLine(prev => eval(prev))
  const btns = [
    { sym: ' % ', setExpr: setLine }, 
    { sym: 'CE', setExpr: cleanLine }, 
    { sym: 'C', setExpr: cleanLine }, 
    { sym: '←', setExpr: backspaceLine },
    { sym: '7', setExpr: setLine },
    { sym: '8', setExpr: setLine },
    { sym: '9', setExpr: setLine },
    { sym: ' * ', setExpr: setLine },
    { sym: '4', setExpr: setLine },
    { sym: '5', setExpr: setLine },
    { sym: '6', setExpr: setLine },
    { sym: ' - ', setExpr: setLine },
    { sym: '1', setExpr: setLine },
    { sym: '2', setExpr: setLine },
    { sym: '3', setExpr: setLine },
    { sym: ' + ', setExpr: setLine },
    { sym: 's', setExpr: setLine },
    { sym: '0', setExpr: setLine },
    { sym: '.', setExpr: setLine },
    { sym: ' = ', setExpr: setAnswer }
  ]
  return (
    <div className='w-1/3 m-auto flex flex-col align-middle justify-center'>
      <div className='container border px-2 py-4 mb-4 mt-10 text-3xl rounded-2xl'>
        {line}
      </div>
      <div className="grid grid-cols-4 gap-1">
        { btns.map(btn => <SquareButton sym={btn.sym} setExpr={btn.setExpr} />) }
      </div>
    </div>
  );
}

export default App;
