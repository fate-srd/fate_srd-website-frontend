import { drupal } from '../../../lib/drupal';

export default function AuthorList({ publicationTagID, authorData }) {
  return (
    <section>
      <h2 className="nav-in-page__about__header">Author(s):</h2>
      <ul className="nav-in-page__about__authorlist">
        {/* {authorlist.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))} */}
      </ul>
    </section>
  );
}

export async function getStaticProps(context) {
  const authorData = await drupal.getResourceCollectionFromContext(
    'author',
    context,
    {
      params: {
        'filter[status]': 1,
        include: 'title,field_tags,uid',
      },
    },
  );

  return {
    props: {
      authorData,
    },
  };
}
