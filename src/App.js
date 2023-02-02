import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Cycle from './components/Cycle';
import Footer from './components/Footer';
import Index from './components/Index';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <BrowserRouter>
        {/*  */}
        {/* <Index /> */}
        <Navbar />
        <Routes>
          <Route index exact path='/' element={<Index />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='cycle' element={<Cycle />} />
          <Route exact path='news' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
