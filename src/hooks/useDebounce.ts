import { useEffect, useState } from 'react';
export const useDebounce = <T,>(value: T, delay = 400) => { const [d, setD] = useState(value); useEffect(() => { const t = setTimeout(() => setD(value), delay); return () => clearTimeout(t); }, [value, delay]); return d; };
