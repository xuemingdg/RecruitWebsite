import React, { Component, Fragment } from 'react';
import styles from './index.less';

import { history } from 'umi';
import { Layout, Row, Col, Card, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import '@amap/amap-jsapi-types';

import { Map, Marker } from 'react-amap';

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
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
          <Content style={{}}>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/landscape.png')}
            />

            <div style={{ padding: 12, background: '#F5F5F5', color: '#000' }}>
              <div className={styles.line}></div>
              <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                Email
              </div>
            </div>
            <div
              style={{
                padding: 12,
                background: '#F5F5F5',
                color: '#000',
                textAlign: 'left',
              }}
            >
              christina.yi.yifen@prudential.com.hk
            </div>
            <div style={{ padding: 12, background: '#F5F5F5', color: '#000' }}>
              <div className={styles.line}></div>
              <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                Address
              </div>
            </div>
            <div id="container" style={{ width: '100%', height: '300px' }}>
              <Map
                amapkey={'15be37512c7b14b6aab737e60df67b2a'}
                zoom={16}
                center={[113.94645, 22.515038]}
              >
                <Marker position={[113.94645, 22.515038]}></Marker>
              </Map>
            </div>
          </Content>
          <Footer
            style={{
              background: '#FFF',
              textAlign: 'center',
              color: '#00BFFF',
            }}
          >
            联系地址(Chinese):深圳市南山区粤海街道海珠社区科苑南路2666号中国华润大厦L805
            <br></br>
            <br></br>
            联系地址(English):Unit 5, 8/F, China Resources Tower, No.2666 Keyuan
            South Road, Yuehai Street, Nanshan District, Shenzhen 518054, China
            <br></br>
            <br></br>
            联系邮箱: christina.yi.yifen@prudential.com.hk<br></br>
            https://www.prudentialcorporation-asia.com
          </Footer>
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
            Index
          </Button>
          <Button
            type="link"
            className={styles.siderItem}
            onClick={() => history.push('/aboutUs')}
          >
            Culture
          </Button>
          <Button type="link" className={styles.siderItem}>
            Contact Us
          </Button>
        </Sider>
      </Layout>
    );
  }
}

export default BasicLayout;
