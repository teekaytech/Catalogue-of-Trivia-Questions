import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryList from './containers/CategoryList';
import Details from './containers/Details';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={CategoryList} />
        <Route path="/categories/:category_name" component={Details} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
