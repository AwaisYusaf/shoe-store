import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalContext} from './components/GlobalContext/GlobalContext';
function App() {
  return (
    <div>
      <GlobalContext>
          <Router>
              <Header/>
              <Body/>
          </Router>
      </GlobalContext>
    </div>
  );
}

export default App;
