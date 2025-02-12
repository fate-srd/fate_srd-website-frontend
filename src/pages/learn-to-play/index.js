import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../../../assets/components/layout';
import movieBreakdown from '../../../assets/images/actualPlay/how-to-run-a-contest.jpg';

const LearnToPlay = ({ data }) => {
  const formatDate = (value) => {
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  };

  const vimeoVideo = {
    id: {
      kind: 'vimeo#video',
      videoId: '747298589'
    },
    snippet: {
      title: 'The Chase Scene from Indiana Jones 3 as a Contest • Fate SRD Movie Breakdown',
      publishedAt: '2022-09-07T00:00:00Z',
      thumbnailUrl: movieBreakdown
    }
  };

  return (
    <Layout>
      <Head>
        <title>Learn to Play Fate</title>
      </Head>
      <main className="main-content-wrapper">
        <h1 className="page-title">Learn to Play Fate</h1>
        <p>
          Thanks to the support of the Fate SRD Patreon, we have been putting
          together a lot of actual play videos you can learn from. Enjoy!
        </p>
        <br />

        <ul className="ap-card__ul">
          {[vimeoVideo, ...data.items]
            .filter((item) => item.id.kind === 'youtube#video' || item.id.kind === 'vimeo#video')
            .sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
            .map((item) => (
              <li key={item.id.videoId} className="ap-card__card">
                <a href={item.id.kind === 'vimeo#video' 
                  ? `https://vimeo.com/manage/videos/${item.id.videoId}`
                  : `https://www.youtube.com/watch?v=${item.id.videoId}`}>
                  <Image
                    className="ap-card__img"
                    src={item.id.kind === 'vimeo#video'
                      ? item.snippet.thumbnailUrl
                      : `https://i.ytimg.com/vi/${item.id.videoId}/maxresdefault.jpg`}
                    width="480"
                    height="360"
                    alt={item.snippet.title}
                  />
                </a>
                <h3 className="ap-card__title">
                  <a href={item.id.kind === 'vimeo#video'
                    ? `https://vimeo.com/manage/videos/${item.id.videoId}`
                    : `https://www.youtube.com/watch?v=${item.id.videoId}`}>
                    {item.snippet.title.split('—')[0]}
                  </a>
                </h3>
                {item.snippet.title.includes('—') && (
                  <h4 className="ap-card__subtitle">
                    {item.snippet.title.split('—')[1]}
                  </h4>
                )}
                <p className="small">{formatDate(item.snippet.publishedAt)}</p>
              </li>
            ))}
        </ul>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const YOUTUBE_HOST = 'https://youtube.googleapis.com';
  const channelId = 'UCQSvVIzeYCcGIbyD4pTsAEQ';

  const res = await fetch(
    `${YOUTUBE_HOST}/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default LearnToPlay;
