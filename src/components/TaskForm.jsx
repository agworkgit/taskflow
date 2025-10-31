import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('To Do');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const newTask = {
            id: crypto.randomUUID(),
            title,
            category,
            priority,
            completed: category === 'Done',
        };

        addTask(newTask);
        setTitle('');
        setCategory('To Do');
        setPriority('Medium');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white dark:bg-[#444654] p-4 rounded shadow mb-6 grid gap-4'
        >
            <input
                type='text'
                placeholder='Task title...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]'
            />
            <div className='flex gap-4'>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-white flex-1 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]'
                >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </select>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className='p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-white flex-1 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]'
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <button
                type='submit'
                className='bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] text-white px-4 py-2 rounded transition-colors'
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
