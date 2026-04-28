import { formatCurrency } from '@/lib/formatters';
export const PriceDisplay = ({ regularPrice, salePrice }: { regularPrice: number; salePrice?: number }) => {
  const discount = salePrice ? Math.round(((regularPrice - salePrice) / regularPrice) * 100) : 0;
  return <div className='flex items-center gap-2'>{salePrice ? <><span className='font-semibold text-primary'>{formatCurrency(salePrice)}</span><span className='text-sm text-muted-foreground line-through'>{formatCurrency(regularPrice)}</span><span className='text-xs text-green-600'>-{discount}%</span></> : <span className='font-semibold'>{formatCurrency(regularPrice)}</span>}</div>;
};
