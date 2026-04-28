import { Pressable, Text } from 'react-native';
export const AccountMenuItem = ({ label, onPress }: { label: string; onPress?: () => void }) => <Pressable onPress={onPress} style={{ paddingVertical: 14, borderBottomWidth: 1, borderColor: '#eee' }}><Text>{label}</Text></Pressable>;
