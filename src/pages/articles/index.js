import { getSortedPostsData } from '../../../lib/posts';
import Link from 'next/link';
import { Layout } from '../../../assets/components/layout';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <main className="main-content-wrapper">
        <h1 className="page-title">All articles</h1>
        
        <ul>
          {allPostsData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-500">{new Date(date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}