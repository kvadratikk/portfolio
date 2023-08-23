import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const TransitionScreen = ({ bg, zIndex, delay }) => {
  return (
    <motion.div
      className={`fixed top-0 bottom-0 right-full w-screen h-screen ${zIndex} ${bg}`}
      variants={transitionVariants}
      transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};

export default TransitionScreen;
