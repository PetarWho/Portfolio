import { Link } from 'react-router-dom';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Section className="flex items-center justify-center min-h-[60vh]">
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                <Home size={18} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
