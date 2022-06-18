import App from './App';
import { createRoot } from 'react-dom/client';
import React from 'react';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);


<html lang="en">
  <body>
    <div id="root"></div>
  </body>
</html>