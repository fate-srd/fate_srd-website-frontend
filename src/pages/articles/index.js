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
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}