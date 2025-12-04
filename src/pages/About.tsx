import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const { personalInfo, interests, socialLinks } = portfolioData;
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Copy email to clipboard
    if (personalInfo.email) {
      try {
        await navigator.clipboard.writeText(personalInfo.email);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
      
      // Try to open mailto
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

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
              <dt className="font-medium col-span-1">Contact</dt>
              <dd className="col-span-2">{personalInfo.email}</dd>
            </dl>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => {
                  const getIcon = (iconName: string) => {
                    switch (iconName) {
                      case 'Github': return <Github className="w-6 h-6" />;
                      case 'Linkedin': return <Linkedin className="w-6 h-6" />;
                      default: return <ExternalLink className="w-6 h-6" />;
                    }
                  };

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group"
                      aria-label={link.ariaLabel}
                    >
                      {getIcon(link.icon)}
                    </a>
                  );
                })}
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={handleEmailClick}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group relative"
                  aria-label="Send email"
                >
                  <Mail className="w-6 h-6" />
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap z-10 transition-all duration-300 ease-in-out ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      Email copied!
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Interests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <Card key={interest.name} className="overflow-hidden flex flex-col">
                {interest.image ? (
                  <img src={interest.image} alt={interest.name} className="w-full h-auto object-contain flex-shrink-0" loading="lazy" />
                ) : (
                  <div className="w-full h-40 bg-gray-800 flex-shrink-0" />
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
