'use client';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const RevenueChart = ({ data }: { data: Array<{ name: string; revenue: number }> }) => (
  <div className='h-80 w-full'>
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={data}><XAxis dataKey='name' /><YAxis /><Tooltip /><Area type='monotone' dataKey='revenue' stroke='#3b82f6' fill='#93c5fd' /></AreaChart>
    </ResponsiveContainer>
  </div>
);
