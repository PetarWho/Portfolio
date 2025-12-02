import { useState } from 'react';
import Card from '@/components/common/Card';
import ImageModal from '@/components/common/ImageModal';
import { Certificate } from '@/types';
import { formatDate } from '@/utils/helpers';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card as="article" hoverable className="overflow-hidden flex flex-col">
        <div className="relative flex-1 flex items-center justify-center cursor-pointer group">
          {certificate.image ? (
            <>
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-contain p-2 group-hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                  Click to expand
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{certificate.name}</h3>
          <p className="text-sm text-gray-400">{certificate.issuer}</p>
          <time className="text-xs text-gray-500" dateTime={certificate.date.toISOString()}>
            {formatDate(certificate.date)}
          </time>
        </div>
      </Card>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={certificate.image || ''}
        imageAlt={certificate.name}
        verifyUrl={certificate.url}
        certificateName={certificate.name}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CertificateCard;
