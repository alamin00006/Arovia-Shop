import { TextInput, View } from 'react-native';

export const AppInput = (props: any) => <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 10, paddingHorizontal: 12 }}><TextInput placeholderTextColor='#888' style={{ height: 44 }} {...props} /></View>;
