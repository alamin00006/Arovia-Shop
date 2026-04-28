import { Pressable, Text } from 'react-native';

export const AppButton = ({ title, onPress, variant='primary', disabled=false }: { title: string; onPress?: () => void; variant?: 'primary'|'outline'; disabled?: boolean }) => (
  <Pressable disabled={disabled} onPress={onPress} style={{ backgroundColor: variant==='primary' ? '#16a34a' : 'transparent', borderColor: '#16a34a', borderWidth: variant==='outline' ? 1 : 0, opacity: disabled ? 0.5 : 1, padding: 12, borderRadius: 10, alignItems: 'center' }}>
    <Text style={{ color: variant==='primary' ? '#fff' : '#16a34a', fontWeight: '600' }}>{title}</Text>
  </Pressable>
);
