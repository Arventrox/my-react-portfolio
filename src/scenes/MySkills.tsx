import { FC } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

import skillsImage from '../assets/skills-image.png';

import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import sassIcon from '../assets/sass-icon.png';
import tailwindIcon from '../assets/tailwind-icon.png';
import javaScriptIcon from '../assets/javascript-icon.png';
import reactIcon from '../assets/react-icon.png';
import reduxIcon from '../assets/redux-icon.png';
import nodeIcon from '../assets/node-icon.png';
import expressIcon from '../assets/express-icon.png';
import firebaseIcon from '../assets/firebase-icon.png';
import gitIcon from '../assets/git-icon.png';
import figmaIcon from '../assets/figma-icon.png';
import adobeXdIcon from '../assets/adobexd-icon.png';
import photoshopIcon from '../assets/photoshop-icon.png';

interface MySkillsProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const MySkills: FC<MySkillsProps> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const skillsDesc = [
    'Proficient in front-end web development technologies.',
    'Skilled in back-end web development technologies.',
    'Ability to design responsive and user-friendly web interfaces.',
    'Strong problem-solving and debugging skills.',
    'Excellent communication and collaboration skills.',
  ];
  const skillsCat = [
    {
      number: '01',
      name: 'Frontend ',
      description: [
        `${javaScriptIcon}`,
        `${reactIcon}`,
        `${reduxIcon}`,
        `${htmlIcon}`,
        `${cssIcon}`,
        `${sassIcon}`,
        `${tailwindIcon}`,
      ],
      transitionDelay: 0,
      background: 'bg-blue',
    },
    {
      number: '02',
      name: 'Backend ',
      description: [`${nodeIcon}`, `${expressIcon}`, `${firebaseIcon}`],
      transitionDelay: 0.2,
      background: 'bg-purple',
    },
    {
      number: '03',
      name: 'Other ',
      description: [`${gitIcon}`, `${photoshopIcon}`, `${adobeXdIcon}`, `${figmaIcon}`],
      transitionDelay: 0.4,
      background: 'bg-yellow',
    },
  ];

  return (
    <section id='skills' className='lg:py-24' onMouseOver={() => setSelectedPage('skills')}>
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl xl:text-5xl mb-5 z-10'>
            MY <span className='text-yellow  z-10'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <ul className='mt-10  text-lg lg:text-xl text-center ss:text-left  ss:list-disc ss:list-inside '>
            {skillsDesc.map((skillItem, index) => (
              <li key={index} className='text-yellow w-full my-1'>
                <span className='text-white'>{skillItem}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className='mt-16 md:mt-0 '>
          {isAboveMediumScreens ? (
            <div
              className='relative ml-20 before:absolute before:-top-10 before:-left-10 
            	before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1] z-10'
            >
              <img alt='skills' className='z-10' src={skillsImage} />
            </div>
          ) : (
            <img alt='skills' className='z-10' src={skillsImage} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between my-16 gap-32'>
        {skillsCat.map((skill, index) => (
          <motion.div
            key={index}
            className='md:w-1/3 mt-10 z-10'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: skill.transitionDelay, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='relative h-32 '>
              <div className='z-10'>
                <p className='font-playfair font-semibold text-5xl lg:text-5xl xl:text-5xl '>
                  {skill.number}
                </p>
                <p className='font-playfair font-semibold text-3xl lg:text-3xl mt-3 xl:text-4xl'>
                  {skill.name}
                </p>
              </div>
              <div
                className={`w-1/2 md:3/4 h-32 ${skill.background} absolute right-0 top-0  z-10`}
              ></div>
            </div>
            <div className='flex my-7 '>
              {skill.description.map((skillLogo, index) => (
                <img
                  key={index}
                  className=' w-10 mr-1 md:mx-3'
                  src={skillLogo}
                  alt={'skill-icon'}
                  loading='lazy'
                ></img>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default MySkills;
