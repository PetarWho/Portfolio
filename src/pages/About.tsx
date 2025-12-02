import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import { portfolioData } from '@/data/portfolio';

const About = () => {
  const { personalInfo, interests } = portfolioData;

  return (
    <Section>
      <Container>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">About me</h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">{personalInfo.name}</h2>
            <p className="text-gray-300">{personalInfo.currentEmployment}</p>
            <div className="space-y-4 mt-4">
              {personalInfo.bio.map((p, i) => (
                <p key={i} className="text-gray-300">{p}</p>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Info</h2>
            <dl className="grid grid-cols-3 gap-2 text-gray-300">
              <dt className="font-medium col-span-1">Name</dt>
              <dd className="col-span-2">{personalInfo.name}</dd>
              <dt className="font-medium col-span-1">Title</dt>
              <dd className="col-span-2">{personalInfo.title}</dd>
              <dt className="font-medium col-span-1">Location</dt>
              <dd className="col-span-2">{personalInfo.location}</dd>
            </dl>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Interests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <Card key={interest.name} className="overflow-hidden">
                {interest.image ? (
                  <img src={interest.image} alt={interest.name} className="w-full h-40 object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-40 bg-gray-800" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{interest.name}</h3>
                  <p className="text-gray-300">{interest.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default About;
