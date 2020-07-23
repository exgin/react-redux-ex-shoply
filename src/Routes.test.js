import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import Routes from './Routes';
import { render } from 'react-dom';
import data from './data.json';

test('renders all names in', function () {
  const { getByText } = render(
    <MemoryRouter>
      <Routes />
    </MemoryRouter>
  );
});
