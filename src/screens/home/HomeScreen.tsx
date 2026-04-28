import { ScrollView, Text, View } from 'react-native';
import { AppHeader } from '@/components/common/AppHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { CategoryList } from '@/components/home/CategoryList';
import { ProductSection } from '@/components/home/ProductSection';
import { BrandShowcase } from '@/components/home/BrandShowcase';
import { trustBadges } from '@/utils/constants';

export const HomeScreen = () => <View style={{ flex:1 }}><AppHeader title='Deliver to Dhaka' /><ScrollView contentContainerStyle={{ padding:16, gap:12 }}><SearchBar /><CategoryList /><HeroCarousel /><ProductSection title='Flash Sale' /><ProductSection title='Best Selling' /><ProductSection title='New Arrivals' /><ProductSection title='Offered Products' /><BrandShowcase /><Text style={{ fontWeight:'700',marginTop:8 }}>Trust Badges</Text>{trustBadges.map((b)=><Text key={b}>• {b}</Text>)}</ScrollView></View>;
