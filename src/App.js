import React from 'react';
import Navbar from './components/Navbar';
import CategoryList from './containers/CategoryList';
import Details from './containers/Details';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Navbar />
      <CategoryList />
      <Details />
    </header>
  </div>
);

export default App;
