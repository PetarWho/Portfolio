import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
        <div className="max-w-2xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h1>
            <p className="text-lg text-gray-300 mb-2">
              I'm always open to new opportunities, collaborations, and interesting conversations.
            </p>
            <p className="text-gray-400">
              If you’re looking to discuss a project, explore collaboration, or need a developer to bring your idea from concept to completion, feel free to reach out using the form below.            </p>
          </header>

          <form className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                {...register('name')}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 transition-colors focus-visible:border-[var(--color-primary-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-accent)]/20"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && <p id="name-error" className="mt-2 text-sm text-[var(--color-error-light)]">{errors.name.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 transition-colors focus-visible:border-[var(--color-primary-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-accent)]/20"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && <p id="email-error" className="mt-2 text-sm text-[var(--color-error-light)]">{errors.email.message}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project, opportunity, or what's on your mind..."
                {...register('message')}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 transition-colors focus-visible:border-[var(--color-primary-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-accent)]/20 resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && <p id="message-error" className="mt-2 text-sm text-[var(--color-error-light)]">{errors.message.message}</p>}
            </div>

            <Button type="submit" isLoading={isSubmitting} aria-live="polite" className="w-full">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {isSubmitSuccessful && (
              <div className="mt-4 p-4 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-md">
                <p className="text-[var(--color-success-light)] text-center font-medium" role="status">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
