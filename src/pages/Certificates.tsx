import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import CertificateCard from '@/components/sections/CertificateCard';
import { certificates } from '@/data/certificates';

const Certificates = () => {
  return (
    <Section>
      <Container>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Certificates</h1>
          <p className="text-gray-400 mt-2">Key certifications and diplomas.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Certificates;
