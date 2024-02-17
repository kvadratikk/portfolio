import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    scaleX: 1,
  },
  animate: {
    x: '0%',
    scaleX: 0,
  },
  exit: {
    x: ['0%', '100%'],
    scaleX: [0, 1],
  },
};

const TransitionScreen = ({ bg, zIndex, delay }) => {
  return (
    <motion.div
      className={`absolute right-full w-screen h-screen ${zIndex} ${bg}`}
      variants={transitionVariants}
      transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
      initial='initial'
      animate='animate'
      exit='exit'
    />
  );
};

export default TransitionScreen;
