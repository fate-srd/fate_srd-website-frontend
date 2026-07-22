import publicationsContent from './publications-content';
import heroFateCore from '../images/landing-page-heroes/hero--fate-core.jpg';
import heroFateAccelerated from '../images/landing-page-heroes/hero--fate-accelerated.jpg';
import heroFateCondensed from '../images/landing-page-heroes/hero--fate-condensed.jpg';
import heroAtomicRobo from '../images/landing-page-heroes/hero--atomic-robo.jpg';
import heroFateSystemToolkit from '../images/landing-page-heroes/hero--fate-system-toolkit.jpg';
import heroFateAdversaryToolkit from '../images/landing-page-heroes/hero--fate-adversary-toolkit.jpg';
import heroFateHorrorToolkit from '../images/landing-page-heroes/hero--fate-horror-toolkit.jpg';
import heroFateSpaceToolkit from '../images/landing-page-heroes/hero--fate-space-toolkit.jpg';
import heroFateAccessibilityToolkit from '../images/landing-page-heroes/hero--fate-accessibility-toolkit.jpg';
import heroFrontierSpirit from '../images/landing-page-heroes/hero--frontier-spirit.jpg';
import heroGodsAndMonsters from '../images/landing-page-heroes/hero--gods-and-monsters.jpg';
import heroIhunt from '../images/landing-page-heroes/hero--ihunt.jpg';
import heroOddsEnds from '../images/landing-page-heroes/hero--odds-ends.jpg';
import heroSailsFullOfStars from '../images/landing-page-heroes/hero--sails-full-of-stars.jpg';
import heroThreeRocketeers from '../images/landing-page-heroes/hero--three-rocketeers.jpg';
import heroVentureCity from '../images/landing-page-heroes/hero--venture-city.jpg';
import heroWarOfAshes from '../images/landing-page-heroes/hero--war-of-ashes.jpg';

const heroBySlug = {
  'fate-core': heroFateCore,
  'fate-accelerated': heroFateAccelerated,
  'fate-condensed': heroFateCondensed,
  'atomic-robo': heroAtomicRobo,
  'fate-system-toolkit': heroFateSystemToolkit,
  'fate-adversary-toolkit': heroFateAdversaryToolkit,
  'fate-horror-toolkit': heroFateHorrorToolkit,
  'fate-space-toolkit': heroFateSpaceToolkit,
  'fate-accessibility-toolkit': heroFateAccessibilityToolkit,
  'frontier-spirit': heroFrontierSpirit,
  'gods-and-monsters': heroGodsAndMonsters,
  ihunt: heroIhunt,
  'odds-and-ends': heroOddsEnds,
  'sails-full-of-stars': heroSailsFullOfStars,
  'three-rocketeers': heroThreeRocketeers,
  'venture-city': heroVentureCity,
  'war-of-ashes': heroWarOfAshes,
};

const publications = Object.fromEntries(
  Object.entries(publicationsContent).map(([slug, publication]) => [
    slug,
    {
      ...publication,
      imageSrc: heroBySlug[slug],
    },
  ]),
);

export function getPublication(slug) {
  const publication = publications[slug];
  if (!publication) {
    throw new Error(`Unknown publication slug: ${slug}`);
  }
  return publication;
}

export function getPublicationSlugs() {
  return Object.keys(publications);
}

export default publications;
