import React, { Component, Fragment } from 'react';
import styles from './index.less';

import { Layout, Row, Col } from 'antd';

import { UnorderedListOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        {/* <Sider width={256} collapsible style={{ background:'#696969', minHeight: '100vh', color: 'white', collapsible: 'true'}}>

                </Sider> */}
        <Layout style={{ background: '#FFF' }}>
          <Header
            style={{
              background: '#FF7765',
              textAlign: 'center',
              padding: 0,
              color: '#FFF',
            }}
          >
            <Row>
              <Col span={22}>Prudential招聘(深圳)</Col>
              <Col span={2}>
                <UnorderedListOutlined />
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '10px 0px 0' }}>
            <iframe
              frameborder="0"
              src="https://v.qq.com/txp/iframe/player.html?vid=v0963nv6eq8"
              id="video"
              width="100%"
              height="300"
            ></iframe>
            <script type="text/javascript">
              document.getElementById("video").style.height=document.getElementById("video").scrollWidth*1.0+"px"
            </script>
            <div style={{ padding: 12, background: '#F5F5F5', color: '#000' }}>
              {this.props.children}
              Hot Positions
            </div>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon1.png')} />}
                >
                  <Meta title="Frontend Engineer(Web)" />
                  {/* <div className={styles.textAutoBreak}>Frontend Engineer(Web)</div> */}
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon2.png')} />}
                >
                  <Meta title="Backend Engineer" />
                  {/* <div className={styles.textAutoBreak}>Backend Engineer</div> */}
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon3.png')} />}
                >
                  <Meta title="Software Architect" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon4.png')} />}
                >
                  <Meta title="Devops Engineer" />
                </Card>
              </Col>
            </Row>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon5.png')} />}
                >
                  <Meta title="Frontend Engineer(App)" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon6.png')} />}
                >
                  <Meta title="QA Engineer" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon7.png')} />}
                >
                  <Meta title="Product Manager" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon8.png')} />}
                >
                  <Meta title="Frontend Leader" />
                </Card>
              </Col>
            </Row>
            <Row align="top">
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon9.png')} />}
                >
                  <Meta title="Market Specialist" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="" src={require('../assets/icon10.png')} />}
                >
                  <Meta title="Trainee & Intern" />
                </Card>
              </Col>
            </Row>
            <div style={{ padding: 12, background: '#F5F5F5', color: '#000' }}>
              {this.props.children}
              About Us
            </div>
            <body style={{ padding: 12, background: '#FFF', color: '#000' }}>
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
            </body>

            <div style={{ padding: 12, background: '#F5F5F5', color: '#000' }}>
              {this.props.children}
              Culture
            </div>
            <img
              alt=""
              style={{ width: '100%', height: 'auto' }}
              src={require('../assets/logo.png')}
            />
            <body
              style={{
                padding: 12,
                background: '#FFF',
                color: '#000',
                textAlign: 'center',
              }}
            >
              <b>Make Our Customers Healthier And Wealthier!</b>
            </body>
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
      </Layout>
    );
  }
}

export default BasicLayout;
