import { Text, View } from 'react-native';
export const AppHeader = ({ title }: { title: string }) => <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff' }}><Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text></View>;
