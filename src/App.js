import React from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllTask from './components/AllTask';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar';
import PageTitle from './components/PageTitle';
import Main from './Main/Main';
import styles from './styles/modules/app.module.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <AppHeader /> },

        { path: '/content', element: <AppContent /> },
        { path: '/completed', element: <AllTask /> },
      ],
    },
  ]);

  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
        {/* <PageTitle>MY TASK</PageTitle>

        <div className={styles.app__wrapper}>
          <NavBar />
          <AppHeader />
          <AppContent />
        </div> */}
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
