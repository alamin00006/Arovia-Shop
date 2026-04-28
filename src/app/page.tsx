import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { CategoryNav } from '@/components/layout/CategoryNav';
import { HeroSlider } from '@/components/home/HeroSlider';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { FlashSaleSection } from '@/components/home/FlashSaleSection';
import { BestSellingSection } from '@/components/home/BestSellingSection';
import { NewArrivalSection } from '@/components/home/NewArrivalSection';
import { OfferedProductsSection } from '@/components/home/OfferedProductsSection';
import { BrandShowcase } from '@/components/home/BrandShowcase';
import { FrequentlyBoughtTogether } from '@/components/product/FrequentlyBoughtTogether';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/layout/Footer';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { mockProducts, trustBadges } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'GhorerFresh - Premium Grocery Delivery',
  description: 'Fresh grocery e-commerce website with fast delivery and trusted quality.'
};

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryNav />
      <MobileMenu />
      <CartDrawer />
      <HeroSlider />
      <div className='container mx-auto grid gap-2 px-4 py-6 text-xs md:grid-cols-4'>
        {trustBadges.map((b) => <div key={b} className='rounded-lg border p-3 text-center'>{b}</div>)}
      </div>
      <FeaturedCategories />
      <FlashSaleSection />
      <BestSellingSection />
      <NewArrivalSection />
      <OfferedProductsSection />
      <BrandShowcase />
      <FrequentlyBoughtTogether products={mockProducts} />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
