import React from 'react';
import ReactDOM from 'react-dom';

import UIProvider from '@lembrador-extensions/ui/dist/providers/ui';

import Home from './presentation/Home';

ReactDOM.render(
  <UIProvider>
    <Home />
  </UIProvider>,
  document.getElementById('root')
);

