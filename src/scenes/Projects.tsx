import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { FC } from 'react';

import lolRandomImg from '../assets/project-1.png';
// import portfolioImg from '../assets/project-2.jpeg';
import smrImg from '../assets/project-3.png';

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

const Projects: FC<ProjectsProps> = ({ setSelectedPage }) => {
  const projectsList = [
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

  return (
    <section id='projects' className='pt-48 pb-48' onMouseOver={() => setSelectedPage('projects')}>
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
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
            BEAUTIFUL USER INTERFACES
          </div>

          {projectsList.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imgURL={project.imgURL}
              url={project.url as string}
            />
          ))}
          <div className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
