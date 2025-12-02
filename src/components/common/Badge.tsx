import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-full transition-colors';

    const variants = {
      default: 'bg-gray-800 text-gray-300 border border-gray-700',
      primary: 'bg-[var(--color-primary-500)]/20 text-[var(--color-primary-accent)] border border-[var(--color-primary-500)]/30',
      secondary: 'bg-[var(--color-secondary-500)]/20 text-[var(--color-secondary-300)] border border-[var(--color-secondary-500)]/30',
      success: 'bg-[var(--color-success)]/20 text-[var(--color-success-light)] border border-[var(--color-success)]/30',
      warning: 'bg-[var(--color-warning)]/20 text-[var(--color-warning-light)] border border-[var(--color-warning)]/30',
    };

    const sizes = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-md px-3 py-1',
      lg: 'text-base px-4 py-1.5',
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
