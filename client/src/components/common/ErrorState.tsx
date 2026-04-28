import { Text, View } from 'react-native';
export const ErrorState = ({ message='Something went wrong' }: { message?: string }) => <View style={{ padding: 16, backgroundColor: '#fee2e2', borderRadius: 8 }}><Text style={{ color: '#b91c1c' }}>{message}</Text></View>;
