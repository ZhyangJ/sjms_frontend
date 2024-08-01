// 转化医学组
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../../components/MyHeader';
import MyFooter from '../../../components/MyFooter';
const { Content } = Layout;
const TranslationalMedicineGroup = () => {
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
                    <h2 style={{ textAlign: 'center' }}>转化医学组</h2>
                    这是转化医学组页
                </div>
            </Content>
        </Layout>
    );
}

export default TranslationalMedicineGroup;