import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState('');

  async function fetchCsv() {
    const response = await fetch('data/fate-product-list.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return csv;
  }
  
  async function getData() {
    const data = Papa.parse(await fetchCsv());
    return data;
  }

  async function sortProducts() {
    const data = await getData();
    const productList = {};

    data.data.forEach((product) => {
      const title = product[1];
      const publisher = product[0];
      const link = product[2];
      const productInfo = { title, link };
    
      if (!productList[publisher]) {
        productList[publisher] = [productInfo]; // Initialize the array with the first product
      } else {
        productList[publisher].push(productInfo); // Add to the existing array
      }
    });

    const sortedProducts = Object.keys(productList).sort().reduce((acc, key) => {
      acc[key] = productList[key].sort((a, b) => a.title.localeCompare(b.title));
      return acc;
    }, {});

    return sortedProducts;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await sortProducts();
      setProducts(data);
    }

    fetchData();
  }, [])

  return (
    <Layout>
      <Head>
        <title>Fate Games &amp; Products</title>
      </Head>
      <main className="main-content-wrapper">
        <h1 className="page-title">Games &amp; Products</h1>
        <p className='large' style={{marginBottom: '2rem'}}>
          Discover Fate books, adventures, and more on this list <a href="https://github.com/fate-srd/fate-product-list?tab=readme-ov-file">managed by the community</a>.
        </p>
        <p style={{marginBottom: '4rem'}}><a className="btn" href="https://docs.google.com/forms/d/e/1FAIpQLScS3fgz0UWqSSlx7f0hkrtb_-y-HFOsD8bDx576aUkrdiZq5w/viewform">Add a game or product</a></p>

        {products && Object.entries(products).map(([key, values]) => (
          <div key={key}>
            {key != "Publisher Name" &&
              <>
                <h3>{key}</h3>
                <ul>
                  {values.map((value, index) => (
                    <>
                      {value.title && <li key={index}><a href={value.link}>{value.title}</a></li>}
                    </>
                  ))}
                </ul> 
              </>
            }
          </div>
        ))}
      </main>
    </Layout>
  );};

export default Products;
