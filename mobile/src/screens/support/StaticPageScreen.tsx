import { Text, View } from 'react-native';
export const StaticPageScreen = ({ route }: any) => <View style={{ flex:1,padding:16 }}><Text>{route.params?.title || 'Static Page'}</Text></View>;
