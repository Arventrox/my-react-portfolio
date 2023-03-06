import instagramIcon from '../assets/instagram.png';
import gitHubIcon from '../assets/github-mark-white.png';
import facebookIcon from '../assets/facebook.png';

const SocialMediaIcons = () => {
  const socialMediaItems = [
    {
      url: 'https://www.instagram.com/stiliyan._ivanov/',
      icon: instagramIcon,
      alt: 'instagram-link',
      imgClassName: 'hover:opacity-50 transition duration-500',
    },
    {
      url: 'https://github.com/Arventrox',
      icon: gitHubIcon,
      alt: 'gitHub-link',
      anchorClassName: 'hover:opacity-50 transition duration-500 w-[30px]',
    },
    {
      url: 'https://www.facebook.com/stiliqn.ivanov.121/',
      icon: facebookIcon,
      alt: 'facebook-link',
      anchorClassName: 'hover:opacity-50 transition duration-500 ',
    },
  ];

  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      {socialMediaItems.map((mediaItem, index) => (
        <a
          key={index}
          className={mediaItem.anchorClassName}
          href={mediaItem.url}
          target='_blank'
          rel='noreferrer'
        >
          <img alt={mediaItem.alt} src={mediaItem.icon}></img>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
