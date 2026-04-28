import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { mockProducts } from '@/utils/constants';

export const MyOrdersScreen = ({ navigation }: any) => <FlatList contentContainerStyle={{ padding:16 }} data={mockProducts} keyExtractor={(i)=>i.id} renderItem={({item}) => <TouchableOpacity style={{ padding:12,borderWidth:1,borderColor:'#eee',borderRadius:10,marginBottom:8 }} onPress={() => navigation.navigate('OrderDetails', { id: item.id })}><Text style={{ fontWeight:'700' }}>ORD-{item.id}</Text><Text>Status: PROCESSING</Text></TouchableOpacity>} />;
