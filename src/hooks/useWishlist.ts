import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleWishlist } from '@/redux/features/wishlist/wishlistSlice';
export const useWishlist = () => { const dispatch = useAppDispatch(); const items = useAppSelector((s) => s.wishlist.items); return { items, toggle: (id: string) => dispatch(toggleWishlist(id)) }; };
