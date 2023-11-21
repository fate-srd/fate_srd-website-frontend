import Link from 'next/link';

const LicensingNav = () => (
  <nav className="licensing-nav">
    <ul>
      <li>
        <strong>LICENSING:</strong>
      </li>
      <li>
        <Link href="/official-licensing-fate/cc">Creative Commons (CC-BY)</Link>
      </li>
      <li>
        <Link href="/official-licensing-fate/ogl">OGL</Link>
      </li>
      <li>
        <Link href="/official-licensing-fate">
          Download SRDs, logo, and font
        </Link>
      </li>
    </ul>
  </nav>
);

export default LicensingNav;
