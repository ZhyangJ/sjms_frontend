// DCCD特征概述
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
const { Content } = Layout;
const DCCDFeaturesOverview = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <MyHeader />
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
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    这是DCCD特征概述页
                </div>
            </Content>
            <MyFooter />
        </Layout>
    );
}

export default DCCDFeaturesOverview;