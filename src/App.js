import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SuccessMotion from './components/SuccessMotion';
import Testimonies from './components/Testimonies';
import WhatWeDo from './components/WhatWeDo';
import Benefits from './components/Benefits';
import Counts from './components/Counts';
import Blogs from './components/Blogs';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='md:min-h-screen bg-[url("./images/header-background.svg")] bg-no-repeat bg-top'>
        <Header />
        <SuccessMotion />
        <Testimonies />
        <WhatWeDo />
        <Benefits />
        <Counts />
        <Blogs />
        <Cta />
      </div>
    </div>
  );
}

export default App;
