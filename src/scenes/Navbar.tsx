import { FC, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

interface Props {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const [isMenuTogled, setIsMenuTogled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  return (
    <nav className={'z-40 w-full fixed top-0 py-6'}>
      <div className={'flex items-center justify-between mx-auto w-5/6'}>
        <h4 className='font-playfair text-3x; font-bold'>JE</h4>
      </div>

      {/* DESKTOP NAV */}
      {isAboveSmallScreens ? (
        <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'></div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
