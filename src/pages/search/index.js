import { useEffect, useRef } from "react";
import { Layout } from "../../../assets/components/layout";

const Search = () => {
  const insertScript = useRef(null);

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cse.google.com/cse.js?cx=605997aac81893733'
    script.async = true
    document.body.appendChild(script)

    const setFocusOnInput = () => {
      document.querySelector('input.gsc-input').focus();
    };

    setTimeout(setFocusOnInput, 1000);
  }, [])
  
  return (
    <Layout>
      <main className="main-content-wrapper" ref={insertScript}>
        <h1 className="page-title">Search</h1>
        <div className="gcse-search">
          <a href="https://cse.google.com/cse?cx=605997aac81893733">
            Search the Fate SRD
          </a>
        </div>
      </main>
    </Layout>
  );
}

export default Search;