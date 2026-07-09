import Link from 'next/link';

export function NodeArticleTeaser({ node, ...props }) {
  return (
    <article className="article-teaser" {...props}>
      <h2 className="article-teaser__title">
        <Link href={node.path.alias}>{node.title}</Link>
      </h2>
      {node.uid?.display_name ? (
        <div className="article-teaser__meta">
          <span className="article-teaser__author">
            {node.uid.display_name}
          </span>
        </div>
      ) : null}
    </article>
  );
}
