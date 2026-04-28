export const formatCurrency = (value: number) => new Intl.NumberFormat('en-BD', { style: 'currency', currency: 'BDT', maximumFractionDigits: 0 }).format(value);
export const formatDate = (value: string | Date) => new Date(value).toLocaleDateString('en-BD', { year: 'numeric', month: 'short', day: 'numeric' });
