import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageTitle from '../components/PageTitle';

function Main() {
  return (
    <div className="container">
      <PageTitle>MY TASK</PageTitle>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Main;
