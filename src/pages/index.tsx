import React, { Component } from 'react';
import styles from './index.less';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>
                    Sider
                </Sider>
                <Layout >
                    <Header style={{ background: '#FF7765', textAlign: 'center', padding: 0 , color: '#FFF'}}>Prudential招聘(深圳)</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#00BFFF' }}>
                      联系地址(Chinese):深圳市南山区粤海街道海珠社区科苑南路2666号<br></br>中国华润大厦L805<br></br>
                      
                      <br></br>
                      联系地址(English):Unit 5, 8/F, China Resources Tower,<br></br> No.2666 Keyuan South Road, Yuehai Street, Nanshan District, Shenzhen 518054, China<br></br>
                      <br></br>
                      联系邮箱:  christina.yi.yifen@prudential.com.hk<br></br>
                      https://www.prudentialcorporation-asia.com
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
