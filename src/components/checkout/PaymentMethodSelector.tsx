import { Text, View } from 'react-native';

export const PaymentMethodSelector = ({ value, onChange }: { value: 'COD'|'ONLINE'; onChange: (v:'COD'|'ONLINE') => void }) => <View style={{ gap: 8 }}><Text style={{ fontWeight:'700' }}>Payment Method</Text><Text onPress={() => onChange('COD')}>{value==='COD' ? '◉' : '○'} Cash on Delivery</Text><Text onPress={() => onChange('ONLINE')}>{value==='ONLINE' ? '◉' : '○'} Online Payment (placeholder)</Text></View>;
