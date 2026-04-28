import { FlatList, Text, View } from 'react-native';
import { AppButton } from '@/components/common/AppButton';
const slides=['Authentic products','Fast delivery','Easy order tracking'];
export const OnboardingScreen = () => <View style={{ flex:1,padding:24,justifyContent:'center' }}><FlatList data={slides} keyExtractor={(i)=>i} renderItem={({item})=><View style={{ marginBottom:24 }}><Text style={{ fontSize:24,fontWeight:'700' }}>{item}</Text></View>} /><AppButton title='Get Started' /></View>;
