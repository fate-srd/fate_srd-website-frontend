import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

const Page = () => (
  <Layout>
    <Head>
      <title>Fate 3.0 Era</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Fate 3.0 Era</h1>
      <h3>
        <a href="/downloads/fate-3/sotc-srd.html">
          Spirit of the Century (OGL SRD)
        </a>
      </h3>

      <h3>Material Genericized from Dresden Files RPG</h3>
      <ul>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/advancement.html">
            Advancement
          </a>
        </li>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/aspects.html">
            Aspects
          </a>
        </li>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/basics.html">
            Basics
          </a>
        </li>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/charactercreation.html">
            Character Creation
          </a>
        </li>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/citycreation.html">
            City Creation
          </a>
        </li>
        <li>
          <a href="/downloads/fate-3/Material-Genericized-from-Dresden-Files-RPG/stunts.html">
            Stunts
          </a>
        </li>
      </ul>
    </main>
  </Layout>
);

export default Page;
