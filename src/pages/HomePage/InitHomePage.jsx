import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
const { Content } = Layout;

const HomePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <MyHeader selectedKeys={[]} />
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 600,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    这是首页
                </div>
            </Content>
            <MyFooter />
        </Layout>
    );
};
export default HomePage;