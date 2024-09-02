import PropTypes from 'prop-types';
import Image from 'next/image';

const stores = {
  direct: {
    alt: 'Buy Directly from the Publisher',
    image: '/images/buySources/buy--eh.png',
  },
  dtr: {
    alt: 'Buy from DriveThruRPG',
    image: '/images/buySources/buy--dtr.png',
  },
  itch: {
    alt: 'Buy from Itch.io',
    image: '/images/buySources/buy--itch.png',
  },
};

const WhereToBuy = ({ value }) => {
  const book = value.toLowerCase().split(' ').join('-');
  const books = {
    'fate-core': {
      direct: 'https://evilhat.com/product/fate-core-system/',
      dtr: 'https://www.drivethrurpg.com/product/114903/Fate-Core-System?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-core',
    },
    'fate-accelerated': {
      direct: 'https://evilhat.com/product/fate-accelerated-edition/',
      dtr: 'https://www.drivethrurpg.com/product/114902/Fate-Accelerated-Edition-o-A-Fate-Core-Build?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-accelerated',
    },
    'fate-condensed': {
      direct: 'https://evilhat.com/product/fate-condensed/',
      dtr: 'https://www.drivethrurpg.com/product/302571/Fate-Condensed?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-condensed',
    },
    'fate-system-toolkit': {
      direct: 'https://evilhat.com/product/fate-system-toolkit/',
      dtr: 'https://www.drivethrurpg.com/product/119385/Fate-System-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-system-toolkit',
    },
    'fate-adversary-toolkit': {
      direct: 'https://evilhat.com/product/fate-adversary-toolkit/',
      dtr: 'https://www.drivethrurpg.com/product/219203/Fate-Adversary-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-adversary-toolkit',
    },
    'atomic-robo': {
      direct: 'https://evilhat.com/product/atomic-robo-rpg/',
      dtr: 'https://www.drivethrurpg.com/product/130204/Atomic-Robo-RPG?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/atomic-robo-the-roleplaying-game',
    },
    'frontier-spirit': {
      direct: 'https://evilhat.com/product/frontier-spirit/',
      dtr: 'https://www.drivethrurpg.com/product/161674/Frontier-Spirit-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/frontier-spirit-a-world-of-adventure-for-fate-core',
    },
    'gods-and-monsters': {
      direct: 'https://evilhat.com/product/gods-and-monsters/',
      dtr: 'https://www.drivethrurpg.com/product/150889/Gods-and-Monsters-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/gods-and-monsters-a-world-of-adventure-for-fate-core',
    },
    'sails-full-of-stars': {
      direct: 'https://evilhat.com/product/sails-full-of-stars/',
      dtr: 'https://www.drivethrurpg.com/product/150022/Sails-Full-of-Stars-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/sails-full-of-stars-a-world-of-adventure-for-fate-core',
    },
    'three-rocketeers': {
      direct: 'https://evilhat.com/product/the-three-rocketeers/',
      dtr: 'https://www.drivethrurpg.com/product/166281/The-Three-Rocketeers-o-A-World-of-Adventure-for-Fate-Core?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/the-three-rocketeers-a-world-of-adventure-for-fate-core',
    },
    'war-of-ashes': {
      direct: 'https://evilhat.com/product/war-of-ashes-fate-of-agaptus/',
      dtr: 'https://www.drivethrurpg.com/product/157134/War-of-Ashes-Fate-of-Agaptus?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/war-of-ashes-fate-of-agaptus',
    },
    ihunt: {
      dtr: 'https://www.drivethrurpg.com/product/298255/iHunt-The-RPG?affiliate_id=144937',
      itch: 'https://machineage.itch.io/ihunt-the-rpg',
    },
    'fate-horror-toolkit': {
      direct: 'https://evilhat.com/product/fate-horror-toolkit/',
      dtr: 'https://www.drivethrurpg.com/product/242625/Fate-Horror-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-horror-toolkit',
    },
    'fate-accessibility-toolkit': {
      direct: 'https://evilhat.com/product/fate-accessibility-toolkit/',
      dtr: 'https://www.drivethrurpg.com/product/283738/Fate-Accessibility-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-accessibility-toolkit',
    },
    'fate-space-toolkit': {
      direct: 'https://evilhat.com/product/fate-space-toolkit/',
      dtr: 'https://www.drivethrurpg.com/product/266197/Fate-Space-Toolkit?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/fate-space-toolkit',
    },
    'venture-city': {
      direct: 'https://evilhat.com/product/venture-city/',
      dtr: 'https://www.drivethrurpg.com/en/product/127246/venture-city-a-superpunk-sourcebook-for-fate-core?affiliate_id=144937',
      itch: 'https://evilhat.itch.io/venture-city-a-superpunk-sourcebook-for-fate-core',
    },
  };

  if (books[book] == null) return false;

  return (
    <section>
      <h2 className="nav-in-page__about__header">Where to Buy</h2>
      <ul className="nav-in-page__about__ul">
        {Object.entries(books[book]).map(([key, v]) => (
          <li className="nav-in-page__about__li" key={v}>
            <a href={v} className="nav-in-page__about__link">
              <Image
                src={stores[key]?.image}
                alt={stores[key]?.alt}
                width={200}
                height={46}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

WhereToBuy.propTypes = {
  value: PropTypes.string,
};

export default WhereToBuy;
