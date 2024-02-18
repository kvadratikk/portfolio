import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/globals.css';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/Layout/Layout';
import Transition from '../components/Transition/Transition';

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Uladzisalava Ryzhova</title>
        <link rel='icon' href='/icons/favicon.ico' sizes='any' />
      </Head>
      <motion.div key={route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
