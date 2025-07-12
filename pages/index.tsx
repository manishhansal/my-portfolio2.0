import { motion } from 'framer-motion';
import MotionWrapper from './components/MotionWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <MotionWrapper
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Hello, Next.js + Tailwind + Framer Motion!</h1>
      </MotionWrapper>
    </main>
  );
}
