import React, { useState } from 'react'
import './App.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/author/store'
// pages and components
import Navbar from './components/Navbar/Navbar';

//pages
import Home from './pages/Home'
import About from './pages/About'
import Authors from './pages/Authors'
import Addauthors from './pages/Addauthors';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
 <Provider store={store}>
  <div className="App">
    <header>
      <Navbar/>
    </header>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/authors" component={Authors}/>
      <Route path="/addauthor" component={Addauthors}/>
      <Route path="/" component={Home}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
 </Provider>
   
  )
}

export default App
