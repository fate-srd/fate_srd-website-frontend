import Link from 'next/link';

export function NodeArticleTeaser({ node, ...props }) {
  return (
    <article {...props}>
      <Link href={node.path.alias} className="no-underline hover:text-blue-600">
        <h3 className="mb-4 text-4xl font-bold">{node.title}</h3>
      </Link>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            <span className="font-semibold">{node.uid.display_name}</span>
          </span>
        ) : null}
      </div>
    </article>
  );
}
