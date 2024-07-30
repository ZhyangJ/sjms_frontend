// 团队介绍
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
import { Button, Flex } from 'antd';

const { Content } = Layout;
const TeamIntroduction = () => {
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
                    这是团队介绍页
                </div>
            </Content>

            <div class="button-container">
                <Button className="button">临床顾问组</Button>
                <Button className="button">转化医学组</Button>
                <Button className="button">软件研发组</Button>
            </div>

            <MyFooter />
        </Layout>
    );
}

export default TeamIntroduction;