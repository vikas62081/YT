import React, { lazy, Suspense } from 'react';
import './App.css';
// import Books from './books';
const Books = lazy(() => import('./books'))

function App() {

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h2>Books Details</h2>
      <div align="center">
        <Suspense fallback={<p>Loading books...</p>}>
          <Books />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
