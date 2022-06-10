import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Menu />
      <Login />
    </div>
  );
}

export default App;
