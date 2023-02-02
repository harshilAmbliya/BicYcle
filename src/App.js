import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Cycle from './components/Cycle';
import Index from './components/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        {/*  */}
        {/* <Index /> */}
        <Routes>
          <Route index exact path='/' element={<Index />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='cycle' element={<Cycle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
