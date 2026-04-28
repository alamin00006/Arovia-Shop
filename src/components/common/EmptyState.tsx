import { Text, View } from 'react-native';
export const EmptyState = ({ title='No data found' }: { title?: string }) => <View style={{ padding: 24, alignItems: 'center' }}><Text style={{ color: '#666' }}>{title}</Text></View>;
