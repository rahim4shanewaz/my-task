import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  //   const updateFilter = (e) => {
  //     setFilterStatus(e.target.value);
  //     dispatch(updateFilterStatus(e.target.value));
  //   };

  return (
    <div className={styles.appHeader}>
      {/* <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button> */}
      <NavLink to="/">
        <Button variant="primary"> Add Task </Button>
      </NavLink>

      <NavLink to="/content">
        <Button variant="primary"> My Task </Button>
      </NavLink>
      <NavLink to="/completed">
        <Button variant="primary">Completed Task </Button>
      </NavLink>
      {/* <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton> */}
    </div>
  );
}

export default NavBar;
