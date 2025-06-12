import Optimizer from './Optimizer';

function App() {
  return (
    <div className="h-screen overflow-hidden text-gray-800 p-2 box-border">
      <div className="border border-[#346291] rounded-md h-full w-full">
        <div className="mx-auto grid gap-6 h-full overflow-y-auto">
          <Optimizer />
        </div>
      </div>
    </div>
  );
}

export default App;
