// style import
import './App.css';

// script imports
import './scripts/mechanics/mainsavelogic.tsx'
import './scripts/mechanics/windowlifecyclelogic.tsx'
import './scripts/mechanics/itemupdatinglogic.tsx'

// (test script imports)
import './scripts/player/testingscript.tsx';

// component imports
import Header from './components/header/header.tsx';
import Sidebar from './components/sidebar/sidebar.tsx';
import Subpage from './components/subpage/subpage.tsx';
import { CoverScreen } from './components/coverscreen/coverscreen.tsx';


function App() {
  return (
    <div className="App">
       <Header />
       <Sidebar />
       <Subpage />
       <CoverScreen />
    </div>
  );
}

export default App;
