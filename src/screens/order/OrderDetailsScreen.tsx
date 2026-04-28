import { Text, View } from 'react-native';

export const OrderDetailsScreen = ({ route }: any) => <View style={{ flex:1,padding:16,gap:8 }}><Text style={{ fontSize:22,fontWeight:'700' }}>Order #{route.params?.id}</Text><Text>Order timeline and item details placeholder.</Text></View>;
