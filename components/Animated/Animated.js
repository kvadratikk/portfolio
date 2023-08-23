import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { fadeIn } from '../../variants';

const Animated = ({
  element,
  direction,
  duration,
  className,
  children,
  transition,
  ...attributes
}) => {
  const DynamicMotionComponent = useMemo(() => motion(element), [element]);

  return (
    <DynamicMotionComponent
      className={className}
      variants={fadeIn(direction, duration)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={transition}
      {...attributes}
    >
      {children}
    </DynamicMotionComponent>
  );
};

export default Animated;
