import { Star } from 'lucide-react';
export const RatingStars = ({ rating=0 }: { rating?: number }) => <div className='flex items-center gap-1'>{Array.from({length:5}).map((_,i)=><Star key={i} className={`h-4 w-4 ${i<Math.round(rating)?'fill-yellow-400 text-yellow-400':'text-gray-300'}`} />)}</div>;
