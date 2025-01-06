import { getSortedPostsData } from '../../../lib/posts';
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
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}