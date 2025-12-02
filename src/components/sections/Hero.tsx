import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const titleLetters = personalInfo.title.split('');

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center gradient-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient flex flex-wrap justify-center gap-2">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.05,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {personalInfo.bio[0].substring(0, 150)}...
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link to="/projects">
              <Button size="lg" className="group" aria-label="View my projects">
                <span>Explore My Work</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
              aria-hidden="true"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full" />
            </motion.div>
            <span className="sr-only">Scroll down to see more content</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
