import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SuccessMotion from './components/SuccessMotion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='md:min-h-screen bg-[url("./images/header-background.svg")] bg-no-repeat bg-top'>
        <Header />
        <SuccessMotion />
      </div>
    </div>
  );
}

export default App;
