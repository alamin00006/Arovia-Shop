'use client';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#f59e0b', '#3b82f6', '#22c55e', '#ef4444', '#8b5cf6'];

export const OrderStatusChart = ({ data }: { data: Array<{ name: string; value: number }> }) => (
  <div className='h-80 w-full'>
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie data={data} dataKey='value' nameKey='name' outerRadius={100}>
          {data.map((_, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
