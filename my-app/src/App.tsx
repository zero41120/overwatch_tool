import Optimizer from './Optimizer';
import BreakPointCalculator from './components/BreakPointCalculator';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="h-screen overflow-hidden text-gray-800 p-2 box-border">
      <div className="border border-[#346291] rounded-md h-full w-full">
        <div className="max-w-5xl mx-auto grid gap-6 h-full overflow-hidden">
          <Toolbar />
          <Optimizer />
          <BreakPointCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
