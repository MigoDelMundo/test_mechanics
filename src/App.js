// style import
import './App.css';

// script imports
import './scripts/mechanics/mainsavelogic.tsx'
import './scripts/mechanics/windowlifecyclelogic.tsx'
import './scripts/mechanics/itemupdatinglogic.tsx'

// (test script imports)
import './scripts/player/testingscript.tsx';

// component imports
import Main from './components/main/main.tsx';

function App() {

  return (
    <Main />
  );
}

export default App;
