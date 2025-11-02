import { useState, useMemo } from 'react';
import TaskList from './TaskList';
import StatsChart from './StatsChart';
import StatusFilter from './StatusFilter';

const initialTasks = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build Dashboard', completed: true },
    { id: 3, title: 'Test Components', completed: false },
];

export default function Dashboard() {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter, setFilter] = useState('all'); // e.g. "completed", "pending", "all"

    // derive filtered tasks dynamically
    const filteredTasks = useMemo(() => {
        if (filter === 'completed') return tasks.filter((t) => t.completed);
        if (filter === 'pending') return tasks.filter((t) => !t.completed);
        return tasks;
    }, [tasks, filter]);

    return (
        <div className='dashboard'>
            <StatusFilter activeFilter={filter} onChange={setFilter} />
            <StatsChart data={filteredTasks} categoryFilter={filter} />
            <TaskList tasks={filteredTasks} onUpdate={setTasks} />
        </div>
    );
}
