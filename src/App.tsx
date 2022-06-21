import { useEffect } from 'react';
import Tasks from './components/Tasks';
// import Blogs from './server/bd/blogs';
import './App.css';



function App() {


  useEffect(() => {
    document.title = "Super tier List";
  });
  return (
    <main className="container my-5">
      {/* <h1 className="text-primary text-center">Hello {Blogs}!</h1> */}
      <div className="App">
        <Tasks />
      </div>
    </main>
  );
}

export default App;
