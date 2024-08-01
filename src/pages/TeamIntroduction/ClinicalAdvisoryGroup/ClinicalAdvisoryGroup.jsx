// 临床顾问组
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../../components/MyHeader';
import MyFooter from '../../../components/MyFooter';
const { Content } = Layout;
const ClinicalAdvisoryGroup = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content>
                
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>临床顾问组</h2>
                    这是临床顾问组页
                </div>
            </Content>
        </Layout>
    );
}

export default ClinicalAdvisoryGroup;