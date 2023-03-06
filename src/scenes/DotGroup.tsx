import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface DotGroupProps {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const DotGroup: FC<DotGroupProps> = ({ selectedPage, setSelectedPage }) => {
  const anchorLinks = ['home', 'skills', 'projects', 'testimonials', 'contact'];

  const selectedStyles =
    'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      {anchorLinks.map((anchorLink, index) => (
        <AnchorLink
          key={index}
          className={`${
            selectedPage === `${anchorLink}` ? selectedStyles : 'bg-dark-grey'
          } w-3 h-3 rounded-full `}
          href={`#${anchorLink}`}
          onClick={() => setSelectedPage(`#${anchorLink}`)}
        />
      ))}
    </div>
  );
};

export default DotGroup;
