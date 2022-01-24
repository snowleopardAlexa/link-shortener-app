import Head from 'next/head';
import { Button } from 'antd';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create React App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Button type="primary">Button</Button>
    </div>
  )
}


