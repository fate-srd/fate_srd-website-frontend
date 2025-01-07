import { Layout } from "../../../assets/components/layout";
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../assets/components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="main-content-wrapper">
        <h1 className="page-title">{postData.title}</h1>
        
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </Layout>
  );
}