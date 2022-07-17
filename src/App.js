import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <Routes>
      {routes.map((page) => (
        <Route path={page.path} element={page.component} />
      ))}
    </Routes>
  );
}

export default App;
