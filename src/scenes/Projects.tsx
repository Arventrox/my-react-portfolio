import { FC, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

import lolRandomImg from '../assets/project-1.png';
import portfolioImg from '../assets/project-2.png';
import smrImg from '../assets/project-3.png';
import useMediaQuery from '../hooks/useMediaQuery';

import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

import githubIcon from '../assets/github-icon.png';
import demoIcon from '../assets/demo-icon.png';

import sassIcon from '../assets/sass-icon.png';
import tailwindIcon from '../assets/tailwind-icon.png';
import reactIcon from '../assets/react-icon.png';
import nodeIcon from '../assets/node-icon.png';
import expressIcon from '../assets/express-icon.png';
import reduxIcon from '../assets/redux-icon.png';
import cssIcon from '../assets/css-icon.png';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imgURL: string;
  githubUrl: string;
  demoUrl: string;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

interface ProjectsProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const projects = [
  {
    title: 'My Portfolio',
    description: 'My personal portfolio app',
    technologies: [`${reactIcon}`, `${tailwindIcon}`, `${nodeIcon}`, `${expressIcon}`],
    githubUrl: 'https://github.com/Arventrox/my-react-portfolio',
    imgURL: portfolioImg,
  },
  {
    title: 'LOL-Randomized',
    description: 'An app to randomize League of legends  ',
    technologies: [`${reactIcon}`, `${sassIcon}`],
    imgURL: lolRandomImg,
    githubUrl: 'https://github.com/Arventrox/LOL-Randomized',
    demoUrl: 'https://arventrox.github.io/LOL-Randomized/',
  },
  {
    title: 'SMR Project Design',
    description: 'A figma UI/UX design for a SMR website',
    technologies: [`${reactIcon}`, `${reduxIcon}`, `${cssIcon}`],
    imgURL: smrImg,
    githubUrl: 'https://github.com/Arventrox/LOL-Randomized',
    demoUrl: 'https://arventrox.github.io/LOL-Randomized/',
  },
];

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

const Project: FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imgURL,
  githubUrl,
  handleMouseEnter,
  handleMouseLeave,
  demoUrl,
}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey flex flex-col 
  justify-center items-center text-center py-auto ss:p-12 text-deep-blue `;
  const projectAlt = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className='relative flex items-center justify-center border-[1px] border-blue my-2 z-30 '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair mt-auto'>{title}</p>
        <p className='mt-2 ss:mt-4'>{description}</p>
        <div className='flex flex-col items-center w-full ss:w-1/2 ss:py-4'>
          <p className='w-full ss:mt-4'>Technologies used</p>
          <div className='flex justify-between  w-full ss:mt-4'>
            {technologies.map((technology, index) => (
              <img key={index} className='w-10 mx-auto' src={technology} alt={'technology-icon'} />
            ))}
          </div>
        </div>
        <div className='flex  justify-center ss:mt-4 md:mt-auto '>
          {githubUrl && (
            <a
              className=' mx-4 flex flex-col items-center text-center'
              href={githubUrl}
              target='_blank'
              rel='noreferrer'
            >
              <img className=' w-10' src={githubIcon} alt={'github-link'}></img>
              Github
            </a>
          )}
          {demoUrl && (
            <a
              className=' mx-4 flex flex-col items-center text-center'
              href={demoUrl}
              target='_blank'
              rel='noreferrer'
            >
              <img className='w-10' src={demoIcon} alt={'demo-link'}></img>
              Demo
            </a>
          )}
        </div>
      </div>
      <img src={imgURL} alt={projectAlt} className='bg-center'></img>
    </motion.div>
  );
};

const Projects: FC<ProjectsProps> = ({ setSelectedPage }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();
  const [currentIndex, setCurrentIndex] = useState(1);
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
      }, 5000);

      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [isVisible, projectsList, currentIndex, startInterval]);

  const goToPrevSlide = () => {
    if (0 < currentIndex) setCurrentIndex((index) => index - 1);
    if (currentIndex === 0) setCurrentIndex(projectsList.length - 1);
  };

  const goToNextSlide = () => {
    if (currentIndex < projectsList.length) setCurrentIndex((index) => index + 1);
    if (currentIndex === projectsList.length - 1) setCurrentIndex(0);
  };
  console.log(currentIndex);

  const handleMouseEnter = () => {
    // Clear the interval when the element is hovered over
    if (intervalId) {
      clearInterval(intervalId);
      setStartInterval(false);
    }
  };

  const handleMouseLeave = () => {
    // Start the interval when the element isn't hovered
    setStartInterval(true);
  };

  return (
    <section
      id='projects'
      className=' py-36  '
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
          <p className='font-playfair font-semibold text-4xl xl:text-5xl'>
            <span className='text-yellow '>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

        <p className=' my-10 md:mb-0 md:text-xl'>
          In this section, you'll find a selection of websites that I've designed and developed.
          Each project showcases my skills and expertise in web development, including front-end
          design, responsive layouts, and user experience optimization.
        </p>
      </motion.div>

      {/* PROJECTS */}

      <div className='flex justify-center  '>
        {isAboveSmallScreens ? (
          <div className='w-full  mx-auto flex flex-col items-center'>
            <div className='relative w-full  grid grid-flow-col mx-auto h-[500px]'>
              <div className='w-full  grid  grid-flow-col-dense  h-full relative '>
                {projectsList.map((project, index) => (
                  <div
                    key={index}
                    className={`flex items-center transition duration-700
                    ${currentIndex === index && 'w-[600px] z-40 col-start-2'}
                    ${currentIndex - 1 === index && 'col-start-1 z-30  '} 
                    ${currentIndex + 1 === index && 'col-start-3 z-30'} `}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <Project
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imgURL={project.imgURL}
                      githubUrl={project.githubUrl as string}
                      demoUrl={project.demoUrl as string}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))}
              </div>
              <button
                className=' transform-translate-y-1/2 text-2xl  bg-transparent border-none outline-none cursor-pointer  z-40 col-start-1'
                onClick={goToPrevSlide}
              >
                <img src={leftArrow} alt={'left-arrow'} className='w-16 mr-3' />
              </button>
              <button
                className=' transform-translate-y-1/2 text-2xl bg-transparent border-none outline-none cursor-pointer z-40'
                onClick={goToNextSlide}
              >
                <img src={rightArrow} alt={'right-arrow'} className='w-16 ml-3 ' />
              </button>

              <div className=' absolute bottom-[-10%] flex justify-center w-full gap-6 z-50'>
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
            className='sm:grid sm:grid-cols-3 '
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
                technologies={project.technologies}
                imgURL={project.imgURL}
                githubUrl={project.githubUrl as string}
                demoUrl={project.demoUrl as string}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
