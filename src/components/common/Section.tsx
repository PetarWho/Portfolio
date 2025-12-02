import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      as: Component = 'section',
      spacing = 'lg',
      children,
      ...props
    },
    ref
  ) => {
    const spacingStyles = {
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16 md:py-20',
      xl: 'py-20 md:py-28',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'w-full',
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export default Section;
