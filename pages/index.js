import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const {isLoading, error, user}= useUser()

  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {user ? (
          <div>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Bookish!</a>
            </h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Link href="/api/auth/logout">Logout</Link>
          </div>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </main>
    </div>
  );
}
