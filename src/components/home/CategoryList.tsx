import { FlatList, Text, View } from 'react-native';
const categories = ['Fruits','Vegetables','Fish','Meat','Dairy'];
export const CategoryList = () => <FlatList horizontal data={categories} keyExtractor={(i)=>i} showsHorizontalScrollIndicator={false} renderItem={({item}) => <View style={{ paddingHorizontal: 14, paddingVertical: 8, borderWidth: 1, borderColor: '#eee', borderRadius: 18, marginRight: 8 }}><Text>{item}</Text></View>} />;
