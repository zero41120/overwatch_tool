import Optimizer from './Optimizer';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <Toolbar />
        <Optimizer />
      </div>
    </div>
  );
}

export default App;
