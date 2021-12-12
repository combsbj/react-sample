import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <>
        <Router basename="/combsbj.github.io">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
