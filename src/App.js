import React from 'react';
import styles from './App.module.scss';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';

function App() {
  return (
    <div className={styles.App}>
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
