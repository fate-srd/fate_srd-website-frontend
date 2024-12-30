import { useState, useEffect, useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'universal-cookie';

const PatreonLogo = () => (
  <svg
    width="1827"
    height="620"
    viewBox="0 0 1827 620"
    fill="none"
    xmlns="https://www.w3.org/2000/svg"
    className="patreon-bar__logo"
  >
    <path
      d="M202.5 226C202.5 216 209.9 209.2 221.5 209.2H277C327.3 209.2 361.5 236.9 361.5 277.6C361.5 317.6 327.6 347.3 277 347.3H269.3C249.9 347.3 239.9 357.3 239.9 373.4V419C239.9 431.9 232.5 440 221.2 440C209.9 440 202.5 431.9 202.5 419V226ZM239.9 283.8C239.9 304.1 250.2 313.8 269.9 313.8H274.7C302.4 313.8 322.8 302.5 322.8 277.7C322.8 252.9 302.5 241.6 274.7 241.6H270C250.3 241.6 240 251.3 240 271.6V283.8H239.9ZM361.6 422.2C361.6 432.8 369 439.9 380.3 439.9C387.7 439.9 394.5 435.1 398.4 425.1L405.2 407C410.7 392.5 420.4 385.7 431 385.7H492.3C502.9 385.7 512.6 392.5 518.1 407L524.9 425.1C528.8 435.1 535.5 439.9 543 439.9C554.3 439.9 561.7 432.8 561.7 422.2C561.7 419.3 561.1 415.7 559.8 412.2L486.6 221.8C482.1 210.2 471.8 204.4 461.8 204.4C451.8 204.4 441.5 210.2 437 221.8L363.8 412.2C362.2 415.8 361.6 419.3 361.6 422.2ZM432.9 335.7C432.9 332.2 433.9 328.9 435.5 324.1L449.4 285.7C452 278.3 456.5 274.7 461.7 274.7C466.9 274.7 471.4 278.2 474 285.7L487.9 324.1C489.5 328.9 490.5 332.2 490.5 335.7C490.5 345.4 485 352.2 470.5 352.2H453.1C438.4 352.2 432.9 345.4 432.9 335.7ZM549.4 226.7C549.4 216.4 556.8 209.3 568.8 209.3H717.2C729.1 209.3 736.6 216.4 736.6 226.7C736.6 237 729.2 244.1 717.2 244.1H692.4C672.7 244.1 662.1 254.1 662.1 277V418.7C662.1 431.9 654.7 440 643.1 440C631.5 440 624.1 431.9 624.1 418.7V277C624.1 254.1 613.5 244.1 593.8 244.1H569C556.8 244.1 549.4 237 549.4 226.7ZM771.4 419C771.4 431.9 778.8 440 790.1 440C801.4 440 808.8 431.9 808.8 419V367.7C808.8 353.2 817.2 347 827.5 347H830.1C836.9 347 843.7 351.2 847.8 357.3L896.8 429.3C901.3 436.1 907.1 439.9 914.5 439.9C924.2 439.9 931.9 431.8 931.9 422.2C931.9 418.3 930.6 414.1 927.7 409.9L895.1 364.1C891.2 358.6 889.6 354.1 889.6 350.2C889.6 342.1 896.7 336.3 905.1 330.2C920.3 318.9 936.7 304.1 936.7 275.7C936.7 236 905.7 209.2 854.7 209.2H789.8C778.2 209.2 771.1 216 771.1 226V419H771.4ZM808.8 280.9V271.2C808.8 250.2 819.8 241.5 836.5 241.5H852.6C880.3 241.5 898.1 251.8 898.1 275.7C898.1 299.6 879.4 310.5 851.6 310.5H836.4C819.8 310.6 808.8 301.9 808.8 280.9ZM984.7 418.3V226C984.7 216 991.8 209.2 1003.4 209.2H1125.4C1137 209.2 1144.1 216 1144.1 226C1144.1 236 1137 242.8 1125.4 242.8H1048.3C1033.1 242.8 1022.2 251.8 1022.2 268.9V276C1022.2 293.1 1033.2 302.1 1048.3 302.1H1108C1119.6 302.1 1126.7 308.9 1126.7 318.9C1126.7 328.9 1119.6 335.7 1108 335.7H1050.6C1035.4 335.7 1022.2 345.1 1022.2 364.1V373.1C1022.2 392.1 1035.4 401.5 1050.6 401.5H1125.5C1137.1 401.5 1144.2 408.3 1144.2 418.3C1144.2 428.3 1137.1 435.1 1125.5 435.1H1003.5C991.8 435.1 984.7 428.3 984.7 418.3ZM1166.3 322.2C1166.3 252.5 1218.6 204.4 1279.9 204.4C1341.2 204.4 1393.5 252.5 1393.5 322.2C1393.5 391.9 1341.2 440 1279.9 440C1218.6 440 1166.3 391.9 1166.3 322.2ZM1208.9 322.2C1208.9 371.2 1237.9 402.5 1279.9 402.5C1321.8 402.5 1350.9 371.2 1350.9 322.2C1350.9 272.8 1321.9 241.9 1279.9 241.9C1238 241.8 1208.9 272.8 1208.9 322.2ZM1438.3 419C1438.3 431.9 1445.7 440 1457 440C1468.3 440 1475.7 431.9 1475.7 419V320.3C1475.7 308.4 1482.8 302.6 1490.2 302.6C1496 302.6 1500.8 305.8 1504.4 311.6L1566.3 415.2C1574.7 429.4 1582.4 440 1598.2 440C1613.4 440 1624.3 429 1624.3 411.3V225.4C1624.3 212.5 1616.9 204.4 1605.6 204.4C1594.3 204.4 1586.9 212.5 1586.9 225.4V324.1C1586.9 336 1579.8 341.8 1572.4 341.8C1566.6 341.8 1561.7 338.6 1558.2 332.8L1496.3 229.2C1487.9 215 1480.2 204.4 1464.4 204.4C1449.2 204.4 1438.3 215.4 1438.3 233.1V419Z"
      fill="#fff"
    />
  </svg>
);

const PatreonBar = () => {
  const [showBar, setshowBar] = useState(false);
  const [patronStatus, setPatronStatus] = useState(null);

  const patreonBarCookieName = 'Patreon Bar';

  const cookies = useMemo(
    () =>
      new Cookies(null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // second * minutes * hours * days
      }),
    []
  );

  const verifyPatronStatus = () => {
    window.location.href = `https://www.patreon.com/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_PATREON_CLIENT_ID}&redirect_uri=${encodeURIComponent(window.location.origin + '/api/patreon-callback')}`;
  };

  const setCookieHandler = () => {
    cookies.set(patreonBarCookieName, 'dismissed', {
      path: '/',
      maxAge: 60 * 60 * 24 * 30 // 30 days in seconds
    });
  };

  const hideBar = () => {
    setshowBar(false);
    setCookieHandler();
  };

  useEffect(() => {
    const cookieContent = cookies.get(patreonBarCookieName);
    if (!cookieContent) {
      setshowBar(true);
    }

    // Check URL parameters for verification status
    const urlParams = new URLSearchParams(window.location.search);
    const verified = urlParams.get('verified');
    const error = urlParams.get('error');

    if (verified === 'true') {
      console.log('Successfully verified as an active Patreon member!');
      setPatronStatus('active');
    } else if (verified === 'false') {
      console.log('Not an active Patreon member');
      setPatronStatus('inactive');
    } else if (error) {
      console.log('Error verifying Patreon status');
      setPatronStatus('error');
    }
  }, [cookies]);

  const handleCloseClick = () => {
    verifyPatronStatus();
    hideBar();
  };

  return (
    <div>
      {showBar && (
        <section className="patreon-bar">
          <div className="patreon-bar__inner">
            <PatreonLogo />
            <a
              href="https://www.patreon.com/fate_srd"
              className="patreon-bar__button"
            >
              Become a supporting member today
            </a>
            <button
              className="patreon-bar__close"
              type="button"
              onClick={handleCloseClick}
            >
              Remove
              <i className="fas fa-times patreon-bar__close__icon" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default PatreonBar;
