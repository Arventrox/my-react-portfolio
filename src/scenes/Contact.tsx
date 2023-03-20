import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import LineGradient from '../components/LineGradient';
import contactImage from '../assets/contact-img.svg';

interface ContactProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: FC<ContactProps> = ({ setSelectedPage }) => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (event: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section
      id='contact'
      className='py-24 ss:py-48 '
      onMouseOver={() => setSelectedPage('contact')}
    >
      {/* HEADINGS */}
      <motion.div
        className='flex justify-end w-full '
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
          <p className='font-playfair font-semibold text-4xl xl:text-5xl '>
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
          className='basis-1/2 flex justify-center '
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImage} alt='contact' className='z-10 w-[550px]' />
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
          <form
            target='_blank'
            className='z-30 relative'
            onSubmit={onSubmitHandler}
            action='https://formsubmit.co/6ca65ced24184c16c3124fb35897ff74 '
            method='POST'
          >
            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
              type='text'
              placeholder='NAME'
              {...register('name', { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className='text-red-400 mt-1'>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='text'
              placeholder='EMAIL'
              {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            />
            {errors.email && (
              <p className='text-red-400 mt-1'>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}
            <textarea
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              placeholder='MESSAGE'
              rows={4}
              cols={50}
              maxLength={2000}
              {...register('message', { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className='text-red-400 mt-1'>
                {errors.message.type === 'required' && 'This field is required.'}
                {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
              </p>
            )}
            <button
              type='submit'
              className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-purple hover:text-white transition duration-500 z-10'
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
