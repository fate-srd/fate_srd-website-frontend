import Head from "next/head"
import { drupal } from "lib/drupal"
import { Layout } from "assets/components/layout"
import { useState, useEffect } from "react"
import linkIcon from '../../assets/images/icons/link-solid.svg'

export default function NodePage({ resource, ruleBook }) {
  const [toc, setToc] = useState([{}]);
  
  useEffect(() => {
    const headers = document.querySelectorAll(
      '.main-content-wrapper h2, .main-content-wrapper h3, .main-content-wrapper h4'
    );

    const processAnchorLinks = (header) => {
      if (header.id !== '') {
        const anchor = `<a href="#${header.id}" class="anchor" style="background-image: url(${linkIcon.src})"></a>`;
        return (header.innerHTML += anchor);
      }
    };

    headers.forEach((header) => {
      processAnchorLinks(header);
    });

    const tocContent = () => {
      const content = [];
      for (const item of headers) {
        if (item.tagName === 'H2') {
          content.push({
            text: item.textContent,
            id: item.id,
          });
        }
      }
      return content;
    };
    setToc(tocContent());
  }, []);

  if (!resource) return null
  const book = ruleBook[0].name

  function replacer(match, p1, p2, p3, offset, string) {
    const hash = p2
      .replace(/ /g, '-')
      .replace(/[?,:()“”"'’+.*]/g, '')
      .replace(/^-/, '')
      .replace(/&amp;/, '')
      .toLowerCase();
    return `<h${p1} id="${hash}">${p2}</h${p1}>`;
  }

  let pageContent =
  resource.body.processed !== ''
  ? resource.body.processed
  : resource.body.value;
  
  pageContent = pageContent.replace(/<h(\d+)>([^<>]*)<\/h(\d+)>/gi, replacer);

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      <main className="main-content-wrapper" role="main">
        <p className="rules-section">{book}</p>
        <h1 className="page-title">{resource.title}</h1>
        {toc.length > 1 && (
          <div className="toc">
            <h5 className="toc__header">Table of Contents</h5>
            <ul className="toc__ul">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div
          dangerouslySetInnerHTML={{ __html: pageContent }}
          
        />
      
      </main>
      {/* <aside className="aside-wrapper">
        <Aside ruleBook={ruleBook} authorlist={authorlist} />
      </aside> */}
    </Layout>
  )
}

export async function getStaticPaths(context) {
  return {
    paths: await drupal.getStaticPathsFromContext("node--article", context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
) {
  const path = await drupal.translatePathFromContext(context)
  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    }
  }

  const resource = await drupal.getResourceFromContext(
    path,
    context,
    {
      params,
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  const ruleBook = await drupal.getResourceCollectionFromContext(
    "taxonomy_term--fate_version",
    context,
    {
      params: {
        "filter[id]": resource.field_tags[0].id,
      },
    }
  )

  return {
    props: {
      resource,
      ruleBook
    },
  }
}
