import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';

export default function CheckoutPage() {
  return <><Header /><main className='container mx-auto px-4 py-6'><h1 className='mb-4 text-2xl font-semibold'>Checkout</h1><div className='grid gap-6 lg:grid-cols-2'><CheckoutForm /><OrderSummary /></div></main><Footer /></>;
}
