import Layout from '../components/Layout/Layout';

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
