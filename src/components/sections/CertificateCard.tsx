import Card from '@/components/common/Card';
import { Certificate } from '@/types';
import { formatDate } from '@/utils/helpers';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <Card as="article" hoverable className="overflow-hidden">
      <div className="aspect-video bg-gray-800 relative">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
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
        {certificate.url && (
          <div className="mt-3">
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-primary-400 hover:text-primary-300 underline"
              aria-label={`Open certificate ${certificate.name} in new tab`}
            >
              Verify
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CertificateCard;
