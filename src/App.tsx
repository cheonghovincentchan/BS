import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default App;
