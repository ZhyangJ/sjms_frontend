// 团队介绍
import React, { useState } from 'react';
import { AutoComplete, Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
import ClinicalGroup from './ClinicalAdvisoryGroup/ClinicalAdvisoryGroup.jsx'
import TranslationalGroup from './TranslationalMedicineGroup/TranslationalMedicineGroup.jsx'
import SoftwareGroup from './SoftwareDevelopmentGroup/SoftwareDevelopmentGroup.jsx'

import { Button, Flex } from 'antd';

const { Content } = Layout;
const TeamIntroduction = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedGroup, setSelectedGroup] = useState(null);   //管理当前选中的组别

    //底部绿色按钮格式
    const buttonStyle = {
        backgroundColor: '#38B474',
        color: 'white',
        flex: 1, // 使按钮占据相等的空间
        margin: '10px', // 按钮间距
        textAlign: 'center', // 使按钮内文本居中
    };


    const renderGroupContent = () => {
        switch (selectedGroup) {
            case 'clinical':
                return <ClinicalGroup />;
            case 'translational':
                return <TranslationalGroup />;
            case 'software':
                return <SoftwareGroup />;
            default:
                return (
                    <div>
                        <h2 style={{ textAlign: 'center' }}>“肾”机妙算——肾癌精准诊疗平台开创者</h2>
                        <p>这是整个团队的介绍内容。</p>
                        <img src="/path/to/team.jpg" alt="团队图片" /> {/* 替换为实际图片路径 */}
                    </div>
                );
        }
    };


  


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
                    {renderGroupContent()}
                    {selectedGroup && (
                    <div className="button-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <Button onClick={() => setSelectedGroup(null)}>
                            返回
                        </Button>
                    </div>
                )}
                </div>
            </Content>

            <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
                <Button
                    className={`button ${selectedGroup === 'clinical' ? 'active' : ''}`}
                    onClick={() => setSelectedGroup('clinical')}
                    style={{
                        ...buttonStyle,
                        opacity: selectedGroup === 'clinical' ? 0.5 : 1,
                    }}
                >
                    临床顾问组
                </Button>
                <Button
                    className={`button ${selectedGroup === 'translational' ? 'active' : ''}`}
                    onClick={() => setSelectedGroup('translational')}
                    style={{
                        ...buttonStyle,
                        opacity: selectedGroup === 'translational' ? 0.5 : 1,
                    }}
                >
                    转化医学组
                </Button>
                <Button
                    className={`button ${selectedGroup === 'software' ? 'active' : ''}`}
                    onClick={() => setSelectedGroup('software')}
                    style={{
                        ...buttonStyle,
                        opacity: selectedGroup === 'software' ? 0.5 : 1,
                    }}
                >
                    软件研发组
                </Button>
            </div>

            <MyFooter />
        </Layout>
    );
}

export default TeamIntroduction;