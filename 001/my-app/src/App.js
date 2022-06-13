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

// надо футер с контактами, 
// сборщик заказа который отправляет заказ на мыло
// и страницы с пагинацией
// база данных в json и посмотреть возможность
// редактирования json как человеко-понятную таблицу