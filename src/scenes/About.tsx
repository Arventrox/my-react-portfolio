import { FC } from 'react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import aboutImg from '../assets/about-img.svg';
interface AboutProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const About: FC<AboutProps> = ({ setSelectedPage }) => {
  return (
    <section id='about' className='py-24  ' onMouseOver={() => setSelectedPage('about')}>
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3 flex flex-col items-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl xl:text-5xl mb-5 z-10 flex'>
            AB<span className='text-yellow  z-10 '>OUT</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7 lg:text-2xl'>
            I'm Stiliyan, a web developer with a passion for creating beautiful, functional, and
            responsive websites. My goal is to create interfaces that are intuitive, accessible, and
            easy to use, with a focus on providing the best possible user experience. I have
            extensive skills in various web development technologies, including both front-end and
            back-end languages and frameworks, and enjoy collaborating with cross-functional teams
            to ensure that every aspect of a project aligns with the client's goals and
            expectations.
          </p>
          <button className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 self-start'>
            Resume
          </button>
        </motion.div>
        <div className='mt-16 md:mt-0 z-10'>
          <img alt='skills' src={aboutImg} />
        </div>
      </div>
    </section>
  );
};

export default About;
