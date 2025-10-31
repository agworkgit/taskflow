import React from 'react';

const TaskFilters = ({
    categoryFilter,
    setCategoryFilter,
    priorityFilter,
    setPriorityFilter,
}) => {
    return (
        <div className='flex gap-4 mb-6'>
            <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className='p-2 rounded border border-gray-300 dark:border-[#555760] bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#10a37f] flex-1'
            >
                <option value='All'>All Categories</option>
                <option value='To Do'>To Do</option>
                <option value='In Progress'>In Progress</option>
                <option value='Done'>Done</option>
            </select>

            <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className='p-2 rounded border border-gray-300 dark:border-[#555760] bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#10a37f] flex-1'
            >
                <option value='All'>All Priorities</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
            </select>
        </div>
    );
};

export default TaskFilters;
