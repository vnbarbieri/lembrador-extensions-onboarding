import React from 'react';

import { UIProvider, Button } from '@lembrador-extensions/ui/lib';

const Home: React.FC = () => (
  <UIProvider>
    <div>Home</div>
    <Button>Teste</Button>
    <Button variant="secondary">Teste</Button>
  </UIProvider>
);

export default Home;
