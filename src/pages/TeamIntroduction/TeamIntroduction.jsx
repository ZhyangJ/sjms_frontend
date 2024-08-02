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
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本团队隶属华中科技大学，由同济医院泌尿外科谌科教授及计算机科学与技术学院李瑞轩教授领衔，成立目的在于整合临床医学、基础医学以及计算机科学专业人才和资源，基于前期肾癌基础研究的自主知识产权成果，运用多学科协作优势，共同构建肾癌精准诊疗平台，实现肾癌患者精准分型，指导后续治疗和监测，造福人类。</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;团队组织框架包括临床顾问组、转化医学组和软件开发组，各小组之间分工明确，高效协作。团队目前拥有26位成员，其中教育部青年长江学者1人，国家资助博士后研究人员计划项目获得者2人（A档1人，B档1人），正高级职称6人，副高级职称成员2人，初级职称1人，在站博士后3人，博士研究生5人，硕士研究生9人。</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，本团队成员围绕肾癌等关键科学问题和临床重大需求展开相关基础研究及人工智能辅助诊疗系统开发，先后主持国家自然科学基金项目10余项、国家博士后基金项目3项、省级项目3项、校级项目5项。获批国家专利100余项，其中发明专利14项，成功转化1项并应用于临床。相关成果发表于Nat Genet、Nat Commun、Cancer Res、Cell Rep Med、Clin Cancer Res、Cancer Immunol Res等高水平期刊，累计数量近100篇，其中单篇IF最高30.8，单篇最高他引238次。相关研究成果获同行高度评价，被Cancer Cell、Nature Reviews Urology、European Urology等国际顶尖刊物正面评价和引用。团队研究成果“肾癌诊疗关键技术创新及应用”在25家医院推广应用，获湖北省科技进步一等奖；自主知识产权技术成果“去透明细胞分化肾癌亚型的鉴定和应用”在省内外5家大型医院推广应用，大样本量前瞻性随访研究已取得令人满意的结果。目前，团队已建立多个研究平台，包括泌尿系肿瘤动物模型构建平台、多组学分析平台以及类器官培养平台等。并与北京大学生物医学前沿创新中心、海军军医大学第二附属医院建立长期科研合作关系。</div>
                        <img
                            src={require('../../pages/TeamIntroduction/0336实验室课题组 (3).jpg')}
                            alt="图1 0336实验室课题组合照" 
                            style={{
                                width: '100%',
                                height: 'auto',
                                padding: '20px'
                            }}
                        />
                        <div
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            图1 0336实验室课题组合照
                        </div>
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