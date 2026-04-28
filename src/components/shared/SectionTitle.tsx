export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className='mb-4 flex items-end justify-between'><div><h2 className='text-xl font-semibold md:text-2xl'>{title}</h2>{subtitle && <p className='text-sm text-muted-foreground'>{subtitle}</p>}</div></div>
);
