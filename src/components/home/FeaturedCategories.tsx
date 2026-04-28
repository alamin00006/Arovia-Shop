import { SectionTitle } from '../shared/SectionTitle';
const categories = ['Fruits','Vegetables','Fish','Meat','Dairy','Snacks'];
export const FeaturedCategories = () => <section className='container mx-auto px-4 py-10'><SectionTitle title='Featured Categories' /><div className='grid grid-cols-2 gap-3 md:grid-cols-6'>{categories.map((c)=><div key={c} className='rounded-xl border p-4 text-center text-sm font-medium'>{c}</div>)}</div></section>;
