import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const HeroSlider = () => <section className='container mx-auto mt-4 px-4'><div className='rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 p-8 text-white md:p-14'><p className='mb-2 text-sm'>Fresh Grocery, Daily Deals</p><h1 className='mb-3 text-3xl font-bold md:text-5xl'>Shop Fresh Food Delivered to Your Door</h1><p className='mb-6 max-w-xl text-sm md:text-base'>Premium quality vegetables, fruits, meat and essentials with trusted sourcing.</p><Link href='/shop'><Button className='bg-white text-emerald-700 hover:bg-white/90'>Shop Now</Button></Link></div></section>;
