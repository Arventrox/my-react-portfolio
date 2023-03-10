import { FC, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

import lolRandomImg from '../assets/project-1.png';
// import portfolioImg from '../assets/project-2.jpeg';
import smrImg from '../assets/project-3.png';
import useMediaQuery from '../hooks/useMediaQuery';

interface ProjectProps {
  title: string;
  description: string;
  imgURL: string;
  url: string;
}

interface ProjectsProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project: FC<ProjectProps> = ({ title, description, imgURL, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col 
  justify-center items-center text-center p-16 text-deep-blue`;
  const projectAlt = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative flex items-center justify-center'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
        <a className='mt-7' href={url} target='_blank' rel='noreferrer'>
          {url}
        </a>
      </div>
      <img src={imgURL} alt={projectAlt} className='bg-center'></img>
    </motion.div>
  );
};
const projects = [
  {
    title: 'My Portfolio',
    description: 'My personal portfolio app',
    imgURL: lolRandomImg,
  },
  {
    title: 'LOL-Randomized',
    description: 'An app to randomize League of legends  ',
    imgURL: lolRandomImg,
    url: 'https://arventrox.github.io/LOL-Randomized/',
  },
  {
    title: 'SMR Project Design',
    description: 'A figma UI/UX design for a SMR website',
    imgURL: smrImg,
  },
];
const Projects: FC<ProjectsProps> = ({ setSelectedPage }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startInterval, setStartInterval] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const projectsList = useMemo(() => projects, []);

  useEffect(() => {
    if (!isVisible) return;
    if (startInterval) {
      const id = setInterval(() => {
        if (currentIndex === projectsList.length - 1 || currentIndex < 0) {
          setCurrentIndex((index) => index - projectsList.length + 1);
        }
        if (
          currentIndex !== projectsList.length - 1 &&
          currentIndex > -1 &&
          currentIndex < projectsList.length
        ) {
          setCurrentIndex((index) => index + 1);
        } else {
          return;
        }
      }, 2500);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [isVisible, projectsList, currentIndex, startInterval]);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % projectsList.length;
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = () => {
    // Clear the interval when the element is hovered over
    if (intervalId) {
      clearInterval(intervalId);
      setStartInterval(false);
    }
  };

  const handleMouseLeave = () => {
    setStartInterval(true);
  };

  return (
    <section
      id='projects'
      className=' py-24 '
      onMouseOver={() => {
        setSelectedPage('projects');
        setIsVisible(true);
      }}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* HEADING */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow '>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

        <p className='my-10'> Random text xxxxxxxxxxxxxxxxxx</p>
      </motion.div>

      {/* PROJECTS */}

      <div className='flex justify-center'>
        {isAboveSmallScreens ? (
          <div className='w-full max-w-[800px] mx-auto flex flex-col items-center'>
            <div
              className='relative w-full h-[627px] '
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {projectsList.map((project, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : ''
                  }`}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    imgURL={project.imgURL}
                    url={project.url as string}
                  />
                </div>
              ))}
              <button
                className='absolute top-1/2 left-[-20%] transform-translate-y-1/2 text-2xl  bg-transparent border-none outline-none cursor-pointer  z-40'
                onClick={goToPrevSlide}
              >
                &lt;
              </button>
              <button
                className='absolute top-1/2 right-[-20%] transform-translate-y-1/2 text-2xl bg-transparent border-none outline-none cursor-pointer z-40'
                onClick={goToNextSlide}
              >
                &gt;
              </button>

              <div className=' absolute bottom-[0%] flex justify-center w-full gap-6 z-50'>
                {projectsList.map((project, index) => (
                  <div key={index} className='relative inline-block'>
                    <button
                      className={`relative before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 ${
                        currentIndex === index
                          ? 'bg-yellow before:border-yellow'
                          : 'bg-dark-grey before:border-none  '
                      }  before:left-[-50%] before:top-[-50%] w-3 h-3 rounded-full `}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(-1)}
                      onClick={() => setCurrentIndex(index)}
                    >
                      {hoveredIndex === index && (
                        <span className='bg-black text-white text-center rounded  py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2'>
                          {project.title}
                        </span>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className='sm:grid sm:grid-cols-3'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {projectsList.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                imgURL={project.imgURL}
                url={project.url as string}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
