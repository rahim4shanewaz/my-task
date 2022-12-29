import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';
import styles from '../styles/modules/app.module.scss';
// import { updateFilterStatus } from '../slices/todoSlice';
import { SelectButton, SelectButtonC } from './Button';
import CompletedTask from './CompletedTask';

import TodoItem from './TodoItem';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AllTask() {
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatuss, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div />
      <SelectButtonC
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatuss}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButtonC>

      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            // <motion.div key={todo.id} variants={child}>
            // <TodoItem key={todo.id} todo={todo} />
            <CompletedTask key={todo.id} todo={todo} />
            // </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No TASKS
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AllTask;
