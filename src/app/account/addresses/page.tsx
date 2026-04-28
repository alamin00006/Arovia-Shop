import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';
import { AddressForm } from '@/components/account/AddressForm';

export default function AccountAddressesPage() { return <><Header /><main className='container mx-auto grid gap-6 px-4 py-6 md:grid-cols-4'><AccountSidebar /><div className='md:col-span-3'><h1 className='mb-4 text-2xl font-semibold'>Address Book</h1><AddressForm /></div></main><Footer /></>; }
