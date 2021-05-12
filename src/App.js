import Header from './Components/Header'
import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Login from './Components/Login';
import { useDataLayerValue } from './HelperTool/DataLayer';

function App() {
  const [{user}, dispatch] = useDataLayerValue();
  return (
    <div className="app">
      {!user ? <Login /> :
        <>
        <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        </> 
      }
      
    </div>
  );
}

export default App;
