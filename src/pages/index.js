import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import heroatomicRobo from '../../assets/images/landing-page-heroes/hero--atomic-robo.jpg';
import heroFateAdversaryToolkit from '../../assets/images/landing-page-heroes/hero--fate-adversary-toolkit.jpg';
import heroFateSystemToolkit from '../../assets/images/landing-page-heroes/hero--fate-system-toolkit.jpg';
import heroFrontierSpirit from '../../assets/images/landing-page-heroes/hero--frontier-spirit.jpg';
import heroGodsAndMonsters from '../../assets/images/landing-page-heroes/hero--gods-and-monsters.jpg';
import heroIHunt from '../../assets/images/landing-page-heroes/hero--ihunt.jpg';
import heroSailsFullOfStars from '../../assets/images/landing-page-heroes/hero--sails-full-of-stars.jpg';
import heroThreeRocketeers from '../../assets/images/landing-page-heroes/hero--three-rocketeers.jpg';
import heroVentureCity from '../../assets/images/landing-page-heroes/hero--venture-city.jpg';
import heroWarOfAshes from '../../assets/images/landing-page-heroes/hero--war-of-ashes.jpg';
import heroFateCondensed from '../../assets/images/landing-page-heroes/hero--fate-condensed.jpg';
import heroFateAccelerated from '../../assets/images/landing-page-heroes/hero--fate-accelerated.jpg';
import heroFateCore from '../../assets/images/landing-page-heroes/hero--fate-core.jpg';
import { Layout } from '../../assets/components/layout';

export default function IndexPage() {
  const toolkits = [
    {
      title: 'Fate System Toolkit',
      desc: 'This toolkit <strong>includes many ideas</strong> that can be used wholesale or as inspiration for your own games.',
      url: '/fate-system-toolkit',
      image: heroFateSystemToolkit,
    },
    {
      title: 'Fate Adversary Toolkit',
      desc: 'A great campaign needs opposition to create stirring conflict. <strong>Learn how to use high quality adversaries</strong> to drive your stories to completion.',
      url: '/fate-adversary-toolkit',
      image: heroFateAdversaryToolkit,
    },
  ];

  const fatebooks = [
    {
      title: 'Atomic Robo',
      desc: '<strong>Action! Science! Robots! Punching! More Science!</strong> Are you ready for some two-fisted science adventure?',
      url: '/atomic-robo',
      image: heroatomicRobo,
    },
    {
      title: 'Venture City',
      desc: '<strong>A world of superpowers, villainous corporations, and ruthless gangs</strong>, set in a near-future where powers are for sale.',
      url: '/venture-city',
      image: heroVentureCity,
    },
    {
      title: 'War of Ashes',
      desc: 'Head off to adventure in a world where the inhabitants might look cute and cuddly but often carry pointy objects with which <strong>they might just decide to stab you</strong>.',
      url: '/war-of-ashes',
      image: heroWarOfAshes,
    },
    {
      title: '#iHunt',
      desc: `<strong>#iHunt is a story telling game about killing monsters in the gig economy.</strong> A gig app called #iHunt offers them more money than you have ever made to hit the streets and kill monsters that go bump in the night. `,
      url: '/ihunt',
      image: heroIHunt,
    },
  ];

  const woa = [
    {
      title: 'Frontier Spirit',
      desc: 'Natural disasters, storms, subsistence, and even basic survival</strong> on an alien spirit world unused to coexisting with sentient creatures',
      url: '/frontier-spirit',
      image: heroFrontierSpirit,
    },
    {
      title: 'Gods & Monsters',
      desc: 'The world is young and majestic, and humans eke out a living and dream of civilization. <strong>But you are not like them: you are a god (or a monster).</strong>',
      url: '/gods-and-monsters',
      image: heroGodsAndMonsters,
    },
    {
      title: 'Sails Full of Stars',
      desc: '<strong>Track down pirates, brave the stars, and mount shipboard battles!</strong>',
      url: '/sails-full-of-stars',
      image: heroSailsFullOfStars,
    },
    {
      title: 'Three Rocketeers',
      desc: '<strong>All for one and one for all!</strong> No skill swashbuckling and conspiracies.',
      url: '/three-rocketeers',
      image: heroThreeRocketeers,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Home • Fate SRD</title>
      </Head>
      <main
        className="main-content-wrapper"
        style={{ paddingBottom: '0', paddingTop: '0' }}
      >
        <div className="main-content main-content__home">
          <section className="section__fate-core">
            <h1 className="page-title">Fate Roleplaying Game</h1>
            <h2 style={{ marginBottom: '2rem' }}>
              System Reference Document (SRD)
            </h2>
            <ul className="core-rules-list">
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link href="/fate-core" aria-label="Read Fate Core">
                  <div className="core-rules-list__item__content">
                    <Image
                      className="core-rules-list__item__image"
                      alt="Fate Core"
                      src={heroFateCore}
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--core">
                      The whole system
                    </div>
                    <div className="core-rules-list__item-content-wrapper">
                      <h3>
                        Fate Core <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </h3>
                      <p>
                        <strong>
                          Fate Core is a dynamic and flexible roleplaying game
                          built around proactive characters that you play.
                        </strong>{' '}
                        Fate Core does not have a default setting to encourage
                        all styles of play.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link
                  href="/fate-accelerated"
                  aria-label="Read Fate Accelerated"
                >
                  <div className="core-rules-list__item__content">
                    <Image
                      className="core-rules-list__item__image"
                      alt="Fate Accelerated"
                      src={heroFateAccelerated}
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--fae">
                      Get started quick!
                    </div>
                    <div className="core-rules-list__item-content-wrapper">
                      <h3>
                        Fate Accelerated{' '}
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </h3>
                      <p>
                        <strong>
                          <abbr title="Fate Accelerated">FAE</abbr> is a
                          grab-n-go version of Fate
                        </strong>
                        , written for <strong>easy prep and easy play</strong>.
                        Don't let that simplicity fool you, use these rules to
                        run any style and any length campaign.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="core-rules-list__item core-rules-list__item--space-above">
                <Link href="/fate-condensed" aria-label="Read Fate Condensed">
                  <div className="core-rules-list__item__content">
                    <Image
                      className="core-rules-list__item__image"
                      alt="Fate Condensed"
                      src={heroFateCondensed}
                    />
                    <div className="core-rules-list__overview core-rules-list__overview--condensed">
                      Compact version of Core
                    </div>
                    <div className="core-rules-list__item-content-wrapper">
                      <h3>
                        Fate Condensed{' '}
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </h3>
                      <p>
                        <strong>
                          Fate Condensed is a version of Fate Core System in a
                          compact form.
                        </strong>{' '}
                        It is a complete roleplaying game; while other books
                        might enhance your use of it, you don’t need any other
                        book to play.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </section>

          <section className="section__more-fate">
            <h2>Toolkit SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {toolkits.map((v) => (
                <li className="core-rules-list__item" key={v.key}>
                  <Link href={v.url} aria-label={`Read ${v.title}`}>
                    <div className="core-rules-list__item__content">
                      <Image
                        src={v.image}
                        alt={v.title}
                        style={{ height: 'auto' }}
                      />
                      <div className="core-rules-list__item-content-wrapper">
                        <h3>
                          {v.title}{' '}
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </h3>
                        <p
                          className={!v.desc ? 'hide' : ''}
                          dangerouslySetInnerHTML={{ __html: v.desc }}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="section__more-fate section__more-fate--lightBlue">
            <h2>Fate World Book SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {fatebooks.map((v) => (
                <li className="core-rules-list__item" key={v.key}>
                  <Link href={v.url} aria-label={`Read ${v.title}`}>
                    <div className="core-rules-list__item__content">
                      <Image
                        src={v.image}
                        alt={v.title}
                        style={{ height: 'auto' }}
                      />
                      <div className="core-rules-list__item-content-wrapper">
                        <h3>
                          {v.title}{' '}
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </h3>
                        <p
                          className={!v.desc ? 'hide' : ''}
                          dangerouslySetInnerHTML={{ __html: v.desc }}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="section__more-fate last">
            <h2>Worlds of Adventure SRDs</h2>
            <ul className="core-rules-list core-rules-list--2up">
              {woa.map((v) => (
                <li className="core-rules-list__item" key={v.key}>
                  <Link href={v.url} aria-label={`Read ${v.title}`}>
                    <div className="core-rules-list__item__content">
                      <Image
                        src={v.image}
                        alt={v.title}
                        style={{ height: 'auto' }}
                      />
                      <div className="core-rules-list__item-content-wrapper">
                        <h3>
                          {v.title}{' '}
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </h3>
                        <p
                          className={!v.desc ? 'hide' : ''}
                          dangerouslySetInnerHTML={{ __html: v.desc }}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
