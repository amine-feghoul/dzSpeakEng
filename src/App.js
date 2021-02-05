import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
function App() {
  return (
    <div className="App">
     
        <Router>
        <Navbar/>
        <div className="main">
        <LeftSideBar/>
        <Switch>
          <Route path ='/' exact component={Home}/>
        </Switch>
        <RightSideBar/>
        </div>
        <footer>
          
        </footer>
        </Router>
    </div>
  );
}

export default App;
