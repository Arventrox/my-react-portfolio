import { FC } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

import skillsImage from '../assets/skills-image.png';

interface MySkillsProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const MySkills: FC<MySkillsProps> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const skills = [
    {
      number: '01',
      name: 'Experience',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      transitionDelay: 0,
      background: 'bg-blue',
    },
    {
      number: '02',
      name: 'Innovative',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      transitionDelay: 0.2,
      background: 'bg-red',
    },
    {
      number: '03',
      name: 'Imaginative',
      description: 'cccccccccccccccccccccccccccccccccccccc',
      transitionDelay: 0.4,
      background: 'bg-yellow',
    },
  ];

  return (
    <section id='skills' className='pt-10 pb-24' onMouseOver={() => setSelectedPage('skills')}>
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
          <p className='font-playfair font-semibold text-4xl lg:text-5xl xl:text-6xl mb-5'>
            MY <span className='text-yellow '>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7 lg:text-3xl'> adsadsaasasaaaaaaaaaaaaaaaaaaa</p>
        </motion.div>
        <div className='mt-16 md:mt-0 '>
          {isAboveMediumScreens ? (
            <div
              className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            	before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]'
            >
              <img alt='skills' className='z-10' src={skillsImage} />
            </div>
          ) : (
            <img alt='skills' className='z-10' src={skillsImage} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='md:w-1/3 mt-10'
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
                <p className='font-playfair font-semibold text-5xl lg:text-6xl '>{skill.number}</p>
                <p className='font-playfair font-semibold text-3xl lg:text-4xl mt-3'>
                  {skill.name}
                </p>
              </div>
              <div
                className={`w-1/2 md:3/4 h-32 ${skill.background} absolute right-0 top-0 z-[-1]`}
              ></div>
            </div>
            <p className='mt-5 lg:text-lg'>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default MySkills;
