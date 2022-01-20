import Head from "next/head";
import { Button, Form, Layout, Input, Title } from "antd";
import styles from "../styles/Home.module.css";

const { Header, Footer, Content } = Layout;

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header>
      <div className={styles.logo} />
    </Header>
    <Content className={styles.content}>
      <div className={styles.shortner}>
        <Title level={5}>Copy &amp; Paste your lengthy link</Title>
        <Form

        >
          <div className={styles.linkField}>
            <div className={styles.linkFieldInput}>
              <Form.Item name="link" noStyle rules={[{
                required: true,
                message: 'Please paste a correct link',
                type: 'url',
              }]}>
                <Input placeholder="https://my-super-long-link.com/blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah" size="large"/>
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

      </div>
    </Content>
    <Footer className={styles.footer}>
      Yet Another Link Shortener (YALS) &copy; 2021
    </Footer>
  </Layout>
  );
}
