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
              width: '100%',
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
          <Content style={{ margin: '0px 0px 0' }}>
            <div style={{ width: '100vw', height: '56vw' }}>
              <iframe
                frameBorder="0"
                src="https://v.qq.com/txp/iframe/player.html?vid=v0963nv6eq8"
                id="video"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Hot Positions</div>
            </div>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=1')}
                  cover={<img alt="" src={require('../assets/icon1.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Frontend Engineer (Web)
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=2')}
                  cover={<img alt="" src={require('../assets/icon2.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Backend Engineer
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=3')}
                  cover={<img alt="" src={require('../assets/icon3.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Software Architect
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=4')}
                  cover={<img alt="" src={require('../assets/icon4.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Devops Engineer
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=5')}
                  cover={<img alt="" src={require('../assets/icon5.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Frontend Engineer (App)
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=6')}
                  cover={<img alt="" src={require('../assets/icon6.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>QA Engineer</div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=7')}
                  cover={<img alt="" src={require('../assets/icon7.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Product Manager
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=8')}
                  cover={<img alt="" src={require('../assets/icon8.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Frontend Leader
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=9')}
                  cover={<img alt="" src={require('../assets/icon9.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Market Specialist
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  bordered={false}
                  size={'small'}
                  onClick={() => history.push('/positionDetails?code=10')}
                  cover={<img alt="" src={require('../assets/icon10.png')} />}
                >
                  <Meta
                    title={
                      <div className={styles.titleTextFormat}>
                        Trainee & Intern
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>About us</div>
            </div>
            <div className={styles.paragraphText}>
              Founded in 1848, Prudential plc is an Asia-led portfolio of
              businesses focused on structural growth markets. The business
              helps individuals to de-risk their lives and deal with their
              biggest financial concerns through life and health insurance, and
              retirement and asset management solutions. Prudential plc has 20
              million customers and is listed on stock exchanges in London, Hong
              Kong, Singapore and New York. As a business unit of Prudential
              plc, Prudential Corporation Asia is a leading life insurer with
              operations in 13 markets in Asia, covering Cambodia, China, Hong
              Kong, India, Indonesia, Laos, Malaysia, Myanmar, the Philippines,
              Singapore, Taiwan, Thailand and Vietnam. Prudential has a robust
              multi-channel distribution platform providing a comprehensive
              range of protection, savings, and investment products to meet the
              diverse needs of Asian families. Shenzhen Prudential Technology
              Limited is a key strategic initiative for Prudential to
              conceptualise, incubate, develop, and evangelise best-in-class
              InsurTech and digital health capabilities across Asia. We look for
              top talent across China to fundamentally transform our businesses
              and deliver a near-frictionless digital experience for the
              millions of customers we serve every day. We are impact driven and
              look for new ways to solve challenging business and operational
              problems.
            </div>
            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Culture</div>
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/logo.png')}
            />
            <div
              style={{
                padding: 12,
                background: '#FFF',
                color: '#000',
                textAlign: 'center',
              }}
            >
              <b>Make Our Customers Healthier And Wealthier!</b>
            </div>
            <div className={styles.subtitleContainer}>
              <div className={styles.line}></div>
              <div className={styles.subtitle}>Address</div>
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
          <Button type="link" className={styles.siderItem}>
            Homepage
          </Button>
          <Button
            type="link"
            className={styles.siderItem}
            onClick={() => history.push('/aboutUs')}
          >
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

export default BasicLayout;
