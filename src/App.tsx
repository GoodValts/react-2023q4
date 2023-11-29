import './app.scss';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <main className="main">
        <Header></Header>
        <Outlet />
      </main>
    </>
  );
}

export default App;
