// Reflects the currently filtered data

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const StatsChart = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;

    const data = [
        { name: 'Completed', value: completedTasks },
        { name: 'Pending', value: pendingTasks },
    ];

    // Colors matching new palette
    const COLORS = ['#10a37f', '#3b82f6']; // Completed: green, Pending: blue

    return (
        <div className='bg-white dark:bg-[#444654] p-4 rounded shadow mt-6'>
            <h2 className='text-gray-900 dark:text-white font-semibold mb-2'>
                Task Completion Stats
            </h2>
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    innerRadius={50}
                    outerRadius={80}
                    fill='#8884d8'
                    paddingAngle={5}
                    dataKey='value'
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: 'none',
                    }}
                    itemStyle={{ color: '#111827' }}
                />
                <Legend
                    wrapperStyle={{ color: '#374151', fontWeight: '500' }}
                />
            </PieChart>
        </div>
    );
};

export default StatsChart;
