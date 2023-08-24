import Layout from '../components/Layout/Layout';
import Head from 'next/head';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Transition from '../components/Transition/Transition';

import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Uladzisalava Ryzhova</title>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
