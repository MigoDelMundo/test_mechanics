// style import
import './App.css';

// script imports
import './scripts/player/sessioninventory.tsx';
import './scripts/mechanics/inventorylogic.tsx';

// (test script imports)
import './scripts/player/testingscript.tsx';

// component imports
import Header from './components/header/header.tsx';
import Sidebar from './components/sidebar/sidebar.tsx';
import Subpage from './components/subpage/subpage.tsx';


function App() {
  return (
    <div className="App">
       <Header />
       <Sidebar />
       <Subpage />
    </div>
  );
}

export default App;
