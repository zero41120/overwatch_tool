import Optimizer from "./Optimizer";
import Tooltip from "./components/shared/Tooltip";

function App() {
  return (
    <div className="dark h-screen overflow-hidden dark:text-gray-100 p-1 sm:p-2 box-border">
      <div className="border border-[#346291] rounded-md h-full w-full">
        <div className="mx-auto grid gap-6 h-full overflow-y-auto">
          <Optimizer />
        </div>
        <Tooltip />
      </div>
    </div>
  );
}

export default App;
