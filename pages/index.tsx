import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function index() {
  return (
    <>
      <Header />
      <h2 className={styles['color-red']}>
        HOME
      </h2>
      <p>
        Paragraph of home
      </p>
    </>
  );
}
