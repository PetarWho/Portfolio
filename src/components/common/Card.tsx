import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'elevated';
  hoverable?: boolean;
  as?: 'div' | 'article' | 'section';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hoverable = false,
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'rounded-xl transition-all duration-300';

    const variants = {
      default: 'bg-gray-900 border border-gray-800',
      outline: 'bg-transparent border-2 border-gray-800',
      elevated: 'bg-gray-900 shadow-xl shadow-black/20 border border-gray-800/50',
    };

    const hoverStyles = hoverable
      ? 'hover:border-[var(--color-primary-500)]/50 hover:shadow-2xl hover:shadow-[var(--color-primary-500)]/10 hover:-translate-y-1 cursor-pointer'
      : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;
