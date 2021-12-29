import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
          <li className={styles.item}><Link href="/user"><a>User</a></Link></li>
          <li className={styles.item}><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </header>
    </div>
  );
}
