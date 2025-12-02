import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Hero from '@/components/sections/Hero';
import TechnologySlider from '@/components/sections/TechnologySlider';

const Home = () => {
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <TechnologySlider />
        </Container>
      </Section>
    </>
  );
};

export default Home;
