import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AddBook from './components/addBook'
import Edit from './components/Edit'
import Dashbord from './components/dashbord'
import BookList from './components/bookList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="header-title">
          <Link to={"/books-app"} >
              <h1 className="main-title">Book List</h1>
          </Link>
        </div>

        <Dashbord/>

        <Switch>
          <Route exact path='/books-app' component={BookList}/>
          <Route path='/add-book' component={AddBook}/>
          <Route path='/Edit/:id' component={Edit}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
