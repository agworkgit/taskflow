// Additional filtering inside the list

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const TaskList = ({ tasks, updateTask, deleteTask, setTasks }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editCategory, setEditCategory] = useState('To Do');
    const [editPriority, setEditPriority] = useState('Medium');

    const toggleComplete = (task) => {
        updateTask({ ...task, completed: !task.completed });
    };

    const startEdit = (task) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
        setEditCategory(task.category);
        setEditPriority(task.priority);
    };

    const saveEdit = (taskId) => {
        updateTask({
            id: taskId,
            title: editTitle,
            category: editCategory,
            priority: editPriority,
            completed: tasks.find((t) => t.id === taskId).completed,
        });
        setEditingTaskId(null);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reordered] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reordered);
        setTasks(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='grid gap-4'
                    >
                        {tasks.length === 0 && (
                            <p className='text-center text-gray-500 dark:text-gray-400 mt-4'>
                                No tasks available. Add a task to get started!
                            </p>
                        )}

                        {tasks.map((task, index) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`flex justify-between items-center px-6 py-4 rounded shadow bg-white dark:bg-[#444654] transition-transform duration-200
                                        ${
                                            snapshot.isDragging
                                                ? 'scale-105 shadow-2xl'
                                                : 'hover:scale-102 hover:shadow-lg'
                                        }
                                    `}
                                    >
                                        <div className='flex items-center gap-4 flex-1'>
                                            <input
                                                type='checkbox'
                                                checked={task.completed}
                                                onChange={() =>
                                                    toggleComplete(task)
                                                }
                                                className='w-5 h-5 text-[#10a37f] rounded focus:ring-2 focus:ring-[#10a37f]'
                                            />

                                            {editingTaskId === task.id ? (
                                                <div className='flex flex-col flex-1 gap-2'>
                                                    <input
                                                        type='text'
                                                        value={editTitle}
                                                        onChange={(e) =>
                                                            setEditTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                        className='p-2 rounded border border-gray-300 dark:border-[#555760] bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-gray-100 flex-1 focus:outline-none focus:ring-2 focus:ring-[#10a37f]'
                                                    />
                                                    <div className='flex gap-2'>
                                                        <select
                                                            value={editCategory}
                                                            onChange={(e) =>
                                                                setEditCategory(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className='p-2 rounded border border-gray-300 dark:border-[#555760] bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-gray-100 flex-1 focus:outline-none focus:ring-2 focus:ring-[#10a37f]'
                                                        >
                                                            <option>
                                                                To Do
                                                            </option>
                                                            <option>
                                                                In Progress
                                                            </option>
                                                            <option>
                                                                Done
                                                            </option>
                                                        </select>
                                                        <select
                                                            value={editPriority}
                                                            onChange={(e) =>
                                                                setEditPriority(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className='p-2 rounded border border-gray-300 dark:border-[#555760] bg-gray-50 dark:bg-[#555760] text-gray-900 dark:text-gray-100 flex-1 focus:outline-none focus:ring-2 focus:ring-[#10a37f]'
                                                        >
                                                            <option>Low</option>
                                                            <option>
                                                                Medium
                                                            </option>
                                                            <option>
                                                                High
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            saveEdit(task.id)
                                                        }
                                                        className='bg-[#10a37f] hover:bg-[#0f8f70] text-white px-3 py-1 rounded mt-1 self-start transition-colors'
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className='flex flex-col flex-1'>
                                                    <p
                                                        className={`text-gray-900 dark:text-gray-100 font-medium ${
                                                            task.completed
                                                                ? 'line-through text-gray-300'
                                                                : ''
                                                        }`}
                                                    >
                                                        {task.title}
                                                    </p>
                                                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                        {task.category} |{' '}
                                                        {task.priority}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {editingTaskId !== task.id && (
                                            <div className='flex gap-2'>
                                                <button
                                                    onClick={() =>
                                                        startEdit(task)
                                                    }
                                                    className='text-[#10a37f] hover:text-[#0f8f70] font-bold transition-colors'
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        deleteTask(task.id)
                                                    }
                                                    className='text-red-500 hover:text-red-700 font-bold transition-colors'
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskList;
