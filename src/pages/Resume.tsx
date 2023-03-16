import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import myResume from '../assets/stiliyan-resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  return (
    <div className='  z-30 scale-50 sm:scale-75 md:scale-[110%] md:mt-10'>
      <Document file={myResume} renderMode='canvas'>
        <Page key={`page_1`} pageNumber={1} />
      </Document>
    </div>
  );
};
const Portfolio = () => {
  return (
    <>
      <nav className={`bg-purple z-50 w-full  top-0 py-4 lg:py-5  relative`}>
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

      <section className='   sm:mt-6  z-30  flex justify-center   '>
        {/* <img loading='lazy' className='w-full z-30' src={resumeImg} alt='resume'></img> */}
        <PDFViewer />
      </section>
    </>
  );
};

export default Portfolio;
