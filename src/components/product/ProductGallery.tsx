import { Image } from 'expo-image';
import { View } from 'react-native';
export const ProductGallery = ({ image }: { image: string }) => <View><Image source={{ uri: image }} style={{ width: '100%', height: 280, borderRadius: 16 }} /></View>;
