import Link from 'next/link';

export const Footer = () => (
  <footer className='mt-16 border-t bg-card'>
    <div className='container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4'>
      <div><h4 className='mb-2 font-semibold'>GhorerFresh</h4><p className='text-sm text-muted-foreground'>Premium grocery shopping with trusted quality and fast delivery.</p></div>
      <div><h5 className='mb-2 font-medium'>Policies</h5><ul className='space-y-1 text-sm'>{[['Privacy','/privacy-policy'],['Terms','/terms'],['Refund','/refund-policy'],['Shipping','/shipping-policy']].map(([n,l])=><li key={String(n)}><Link href={String(l)}>{n}</Link></li>)}</ul></div>
      <div><h5 className='mb-2 font-medium'>Help</h5><ul className='space-y-1 text-sm'>{[['FAQ','/faq'],['How to order','/how-to-order'],['Track order','/track-order']].map(([n,l])=><li key={String(n)}><Link href={String(l)}>{n}</Link></li>)}</ul></div>
      <div><h5 className='mb-2 font-medium'>Contact</h5><p className='text-sm'>support@ghorerfresh.com</p><p className='text-sm'>+8801700000000</p></div>
    </div>
  </footer>
);
