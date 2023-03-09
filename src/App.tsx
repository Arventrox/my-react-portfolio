import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6 mx-auto md:h-full' id='home'>
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full' id='skills'>
        <MySkills setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto '>
        <Projects setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto '>
        <Contact setSelectedPage={setSelectedPage} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
