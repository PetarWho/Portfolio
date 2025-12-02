import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { portfolioData } from '@/data/portfolio';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(30, 'Message must be at least 30 characters'),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    const resp = await fetch('https://formspree.io/f/mjvnywqj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (resp.ok) {
      reset();
    }
  };

  return (
    <Section>
      <Container>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-gray-400 mt-2">Or reach me on Discord: <span className="font-semibold">{portfolioData.personalInfo.discord}</span></p>
        </header>

        <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block text-md font-medium text-gray-200 mb-1">Name</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && <p id="name-error" className="mt-1 text-md text-[var(--color-error-light)]">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-md font-medium text-gray-200 mb-1">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && <p id="email-error" className="mt-1 text-md text-[var(--color-error-light)]">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-md font-medium text-gray-200 mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              {...register('message')}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && <p id="message-error" className="mt-1 text-md text-[var(--color-error-light)]">{errors.message.message}</p>}
          </div>

          <Button type="submit" isLoading={isSubmitting} aria-live="polite">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>

          {isSubmitSuccessful && (
            <p className="mt-3 text-[var(--color-success-light)]" role="status">Message sent successfully. Thank you!</p>
          )}
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
