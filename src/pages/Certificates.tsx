import { useState, useMemo } from 'react';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import CertificateCard from '@/components/sections/CertificateCard';
import { certificates } from '@/data/certificates';

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = useMemo(() => {
    if (!searchQuery.trim()) {
      return certificates;
    }

    const query = searchQuery.toLowerCase();

    return certificates.filter((certificate) => {
      // Search by name
      if (certificate.name.toLowerCase().includes(query)) {
        return true;
      }

      // Search by issuer
      if (certificate.issuer.toLowerCase().includes(query)) {
        return true;
      }

      // Search by technologies
      if (
        certificate.technologies?.some((tech) =>
          tech.toLowerCase().includes(query)
        )
      ) {
        return true;
      }

      return false;
    });
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Certificates</h1>
          <p className="text-gray-400 mt-2">Key certifications and diplomas.</p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name, issuer, or technology (e.g., Python, Django, SoftUni)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary-500)] transition-colors"
            aria-label="Search certificates"
          />
          {searchQuery && (
            <p className="text-md text-gray-400 mt-2">
              Found {filteredCertificates.length} result{filteredCertificates.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-12 text-center">
            <div>
              <p className="text-gray-400 text-lg">No certificates found</p>
              <p className="text-gray-500 text-md mt-2">Try adjusting your search criteria</p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Certificates;
