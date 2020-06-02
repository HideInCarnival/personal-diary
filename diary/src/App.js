import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import Editor from './components/Editor';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail}/>
          <Route path="/editor" exact component={Editor}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
