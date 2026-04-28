'use client';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const SalesChart = ({ data }: { data: Array<{ label: string; value: number }> }) => (
  <div className='h-80 w-full'>
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data}><XAxis dataKey='label' /><YAxis /><Tooltip /><Bar dataKey='value' fill='#60a5fa' /></BarChart>
    </ResponsiveContainer>
  </div>
);
