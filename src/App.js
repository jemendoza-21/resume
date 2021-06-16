import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import Education from './pages/Education';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/education' component={Education} />
          <NavBar/>
        </Switch>
      </BrowserRouter>     
    </div>
  );
}

export default App;
