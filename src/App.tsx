import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Particle from './components/Particle';

const App = () => {
  return (
    <div className='app'>
      <Particle />
      <Routes>
        <Route path='my-react-portfolio/' element={<Home />} />
        <Route path='my-react-portfolio/resume' element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
