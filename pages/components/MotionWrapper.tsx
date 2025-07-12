import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function MotionWrapper({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}: {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
}) {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
