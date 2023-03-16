import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import resumeImg from '../assets/resume-image.jpg';
import myResume from '../assets/stiliyan-resume.pdf';

const Portfolio = () => {
  return (
    <>
      <nav className={`bg-purple z-50 w-full  top-0 py-4 lg:py-5 xl:py-6 relative`}>
        <div className={'flex items-center justify-between mx-auto w-5/6'}>
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
            <p className='font-playfair font-semibold text-4xl xl:text-5xl z-10'>
              RE<span className='text-yellow  z-10'>SUME</span>
            </p>
          </motion.div>
          <a
            href={myResume}
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 self-start text-lg'
            download={`Stiliyan's resume.pdf`}
          >
            EXPORT PDF
          </a>
        </div>
        <span className='absolute w-full bottom-0 '>
          <LineGradient />
        </span>
      </nav>

      <section className='w-3/4 lg:w-2/4 mx-auto  md:h-full lg:py-24  mt-6  z-30 relative '>
        <img loading='lazy' className='w-full z-30' src={resumeImg} alt='resume'></img>
      </section>
    </>
  );
};

export default Portfolio;
