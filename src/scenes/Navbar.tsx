import { FC, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';
import LineGradient from '../components/LineGradient';

interface NavBarProps {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  isTopOfPage: boolean;
}

interface LinkProps {
  selectedPage: string;
  page: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Link: FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow bg-deep-blue ss:bg-transparent' : ''
      } hover:text-yellow transition duration-500 py-5`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar: FC<NavBarProps> = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  const navbarBackground = isTopOfPage ? '' : 'bg-purple';
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`${navbarBackground} z-50 w-full fixed top-0 py-4 lg:py-5 xl:py-6`}>
      <div className={'flex items-center justify-between mx-auto w-5/6'}>
        <h4 className='font-playfair text-3xl font-bold lg:text-4xl'>SI</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-sm lg:text-lg font-semibold'>
            {links.map((link, index) => (
              <Link
                key={index}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className='rounded-full bg-purple p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt='menu-icon' src={menuIcon}></img>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-purple w-[300px] z-50 border-l-2 border-blue'>
            {/* CLOSE ICON */}
            <div className='flex justify-end p-12'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt='close-icon' src={closeIcon}></img>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className='flex flex-col  text-center w-full text-2xl text-white  '>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
      {!isTopOfPage && (
        <span className='absolute w-full bottom-0 '>
          <LineGradient />
        </span>
      )}
    </nav>
  );
};

export default Navbar;
