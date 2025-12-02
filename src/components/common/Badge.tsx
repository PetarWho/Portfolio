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
      primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
      secondary: 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30',
      success: 'bg-green-500/20 text-green-300 border border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    };

    const sizes = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-3 py-1',
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
