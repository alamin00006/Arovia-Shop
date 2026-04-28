export type ProductBadge = 'BEST_SELLING'|'NEW_ARRIVAL'|'OFFERED'|'FLASH_SALE'|'STOCK_OUT';
export interface Product { id: string; name: string; slug: string; image: string; regularPrice: number; salePrice?: number; rating: number; stock: number; badges: ProductBadge[]; }
