import { Text, View } from 'react-native';
export const StatusBadge = ({ label }: { label: string }) => <View style={{ backgroundColor: '#dcfce7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 99 }}><Text style={{ color: '#166534', fontSize: 12 }}>{label}</Text></View>;
