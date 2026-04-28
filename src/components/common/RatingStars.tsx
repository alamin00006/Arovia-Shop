import { Text } from 'react-native';
export const RatingStars = ({ rating }: { rating: number }) => <Text style={{ color: '#f59e0b' }}>{'★'.repeat(Math.round(rating))}{'☆'.repeat(5-Math.round(rating))}</Text>;
