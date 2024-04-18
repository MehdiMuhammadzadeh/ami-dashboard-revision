import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell,  } from 'recharts';
const Chart = () => {

    const data = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
      ];
      const dataPie = [
        { name: 'Category 1', value: 400 },
        { name: 'Category 2', value: 300 },
        { name: 'Category 3', value: 300 },
        { name: 'Category 4', value: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div>
<div>
<LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="red" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
</div>
<div>
<PieChart width={400} height={400}>
      <Pie
        data={dataPie}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="red"
        label
      >
        {dataPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
</div>
    </div>
  )
}

export default Chart