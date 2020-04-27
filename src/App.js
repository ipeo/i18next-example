import React, { Suspense } from 'react';

import './App.css';
import ExampleComponent from './Example';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <ExampleComponent />
      </Suspense>
    </div>
  );
}

export default App;
