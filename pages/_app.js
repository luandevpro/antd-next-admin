import '../styles/globals.css';
import Layout from '../layouts/Layout';
import 'antd/dist/antd.css';
import Router from 'next/router';

// dev fix for css loader
if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/css/styles.chunk.css';
    const chunksSelector = `link[href*="${path}"]`;
    const chunksNodes = document.querySelectorAll(chunksSelector);
    const timestamp = new Date().valueOf();
    chunksNodes[0].href = `${path}?${timestamp}`;
  });
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
