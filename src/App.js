import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SideList from './components/SideList';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideList />
      <div>
        <Header />
        <Introduction/>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
