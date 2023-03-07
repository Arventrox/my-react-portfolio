import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import contactImage from '../assets/contact-image.jpeg';

const Contact = () => {
  // const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i; not working
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section id='contact' className='py-48'>
      {/* HEADINGS */}
      <motion.div
        className='flex justify-end w-full'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow '>CONTACT ME</span> TO GET STARTED
          </p>
          <div className='flex md:justify-end my-5'>
            <LineGradient width=' w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          className='basis-1/2 flex justify-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImage} alt='contact' />
        </motion.div>

        <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target='_blank' onSubmit={onSubmitHandler} action='' method='POST'>
            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
              type='text'
              required={true}
              placeholder='NAME'
              maxLength={100}
            />

            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='email'
              placeholder='EMAIL'
              required={true}
              // pattern={}
            />

            <textarea
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              placeholder='MESSAGE'
              required={true}
              rows={4}
              cols={50}
              maxLength={2000}
            />

            <button
              type='submit'
              className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500'
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
