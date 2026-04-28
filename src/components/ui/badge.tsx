import { cn } from '@/lib/utils';
export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span className={cn('inline-flex rounded-full bg-muted px-2.5 py-1 text-xs', className)} {...props} />;
