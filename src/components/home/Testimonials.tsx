import { SectionTitle } from '../shared/SectionTitle';

export const Testimonials = () => <section className='container mx-auto px-4 py-10'><SectionTitle title='What Customers Say' /><div className='grid gap-4 md:grid-cols-3'>{['Super fresh products and fast delivery.','Great prices and quality support.','Best online grocery experience!'].map((t,i)=><div key={i} className='rounded-xl border p-5 text-sm text-muted-foreground'>“{t}”</div>)}</div></section>;
