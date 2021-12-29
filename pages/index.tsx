import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/user"><a>User</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </header>
      <h2>
        HOME
      </h2>
      <p>
        Paragraph of home
      </p>
    </>
  );
}
