export const getDiscountPercent = (regular: number, sale?: number) => sale ? Math.round(((regular - sale) / regular) * 100) : 0;
