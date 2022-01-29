import { useState } from 'react';
import Head from "next/head";
import { Alert, Button, Form, Layout, Input, Typography } from "antd";
import styles from "../styles/Home.module.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function Home() {
  const [status, setStatus] = useState <'initial' | 'error'> ('initial');

// alert function
const onFinishedFailed = () => {
   setStatus('error');
}

  return (
    <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header>
      <div className={styles.logo}>
       Linker  
      </div>
    </Header>
    <Content className={styles.content}>
      <div className={styles.shortner}>
        <Title level={5}>Copy &amp; Paste your lengthy link</Title>
        <Form
         onFinishFailed={onFinishedFailed}
        >
          <div className={styles.linkField}>
            <div className={styles.linkFieldInput}>
              <Form.Item name="link" noStyle rules={[{
                required: true,
                message: 'Please paste a correct link',
                type: 'url',
              }]}>
                <Input placeholder="https://my-long-link.com/..." size="large"/>
              </Form.Item>
            </div>
            <div className={styles.linkFieldButton}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }} size="large">
                  Shorten!
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
        {status === 'error' && <Alert showIcon message="Please paste correct link" type="error" />}
      </div>
    </Content>
    <Footer className={styles.footer}>
      Link Shortener App
    </Footer>
  </Layout>
  );
}

export default Home;