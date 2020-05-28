import React, { Component, Fragment } from 'react';
import styles from './index.less';

import { history } from 'umi';
import { Layout, Row, Col, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export default class AboutInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <Layout style={{ background: '#FFF' }}>
          <Header
            style={{
              background: '#FF7765',
              textAlign: 'center',
              padding: 0,
              color: '#FFF',
            }}
          >
            <Row type="flex">
              <Col span={24} className={styles.headerText}>
                Prudential Recruitment(Shenzhen)
              </Col>
              <Col span={0}>
                {/* <UnorderedListOutlined style={{ fontSize: '20px' }} /> */}
              </Col>
            </Row>
          </Header>
          <Content>
            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Care</div>
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/care.jpg')}
            ></img>
            <div className={styles.paragraphText}>
              <b>
                We respect the trust that our customers place in us. We are in
                the business of helping families and our people are our assets.
                We listen to the needs of our customers and communities and
                provide hope and protection for the future.
              </b>
            </div>

            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Collaborate</div>
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/collaborate.jpg')}
            ></img>
            <div className={styles.paragraphText}>
              <b>
                We work together and encourage one another. We build valuable
                relationships between our people, our customers and our
                communities. Together we are a rich and deep source of knowledge
                and experience, sharing our insights and continually
                strengthening our expertise.
              </b>
            </div>

            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Innovate</div>
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/innovate.jpg')}
            ></img>
            <div className={styles.paragraphText}>
              <b>
                From new joiners to seasoned leaders, our people are
                solution-driven. They are ready to formulate and implement new
                ways of thinking and working to deliver innovative services.
              </b>
            </div>

            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Deliver</div>
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/deliver.jpg')}
            ></img>
            <div className={styles.paragraphText}>
              <b>
                We are dedicated to the goals of Prudential. We have the
                initiative and diligence to achieve. We keep our targets in our
                sight and perform to ensure we deliver.
              </b>
            </div>
          </Content>
        </Layout>
        <Sider
          id="sider"
          width={'30vw'}
          collapsible
          style={{
            background: '#696969',
            minHeight: '100vh',
            color: 'white',
            textAlign: 'center',
            paddingTop: '12px',
          }}
          reverseArrow={true}
          collapsedWidth={0}
          defaultCollapsed
          theme={'dark'}
          zeroWidthTriggerStyle={{ top: '12px', background: '#FF7765' }}
        >
          <Button
            type="link"
            className={styles.siderItem}
            onClick={() => history.push('')}
          >
            Homepage
          </Button>
          <Button type="link" className={styles.siderItem}>
            About Us
          </Button>
          <Button
            type="link"
            className={styles.siderItem}
            onClick={() => history.push('/contact')}
          >
            Contact Us
          </Button>
        </Sider>
      </Layout>
    );
  }
}
