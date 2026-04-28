export type OrderStatus = 'PENDING'|'CONFIRMED'|'PROCESSING'|'SHIPPED'|'DELIVERED'|'CANCELLED';
export interface Order { id: string; orderNumber: string; status: OrderStatus; paymentStatus: 'UNPAID'|'PAID'|'FAILED'|'REFUNDED'; total: number; }
