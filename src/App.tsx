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
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
