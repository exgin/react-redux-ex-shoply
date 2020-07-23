import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <ItemList />
      </Route>

      <Route path='/products/:id'>
        <ItemDetails />
      </Route>
    </Switch>
  );
};

export default Routes;
