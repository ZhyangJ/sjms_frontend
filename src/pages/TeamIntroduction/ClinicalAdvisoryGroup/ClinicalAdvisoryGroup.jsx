// 临床顾问组
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../../components/MyHeader';
import MyFooter from '../../../components/MyFooter';
const { Content } = Layout;

const picStyle={
    width:'100%',
    maxWidth:'456px',
    margin:'0 auto',
    paddingTop:'100px'
};

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
                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-1王少刚.png')}
                                alt='王少刚'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>王少刚</strong>，肾癌精准诊疗平台临床首席顾问，华中科技大学同济医学院附属同济医院泌尿外科主任。二级教授，主任医师，博士生导师。临床上擅长泌尿系结石及泌尿系肿瘤的微创治疗，特别是腹腔镜、机器人辅助腹腔镜、经皮肾镜、输尿管软镜等微创手术。先后主持9项国家自然科学基金项目，荣获国家科学技术进步二等奖、中华医学会科技进步二等奖、湖北省科技进步奖二等奖各一项。2017年荣获中华医学会泌尿外科学分会微创领域专项奖“金膀胱镜奖”，2018年获“国之名医、优秀风范”奖，2021年荣获吴阶平泌尿外科医学奖。发表学术论文100余篇。主编、参编泌尿外科、男科专著多部。现任多个学会委员及杂志编委。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-2管维.png')}
                                alt='管维'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>管维</strong>，华中科技大学同济医学院附属同济医院泌尿外科主任医师。先后参加欧洲、美国泌尿外科住院医师培训计划，在美国加州大学洛杉矶分校进行肾癌及前列腺癌的学术研究，并在罗纳德里根医学中心泌尿外科进修。从事泌尿外科工作20余年，专攻泌尿系统肿瘤的综合诊治，尤其擅长机器人及腹腔镜手术。担任欧洲泌尿外科学会会员、中华医学会泌尿外科分会机器人学组委员、中国抗癌协会泌尿男生殖系肿瘤专委会少见类型肾癌协作组副组长等职务。担任《中国泌尿外科和男科疾病诊断治疗指南》编委。曾获中华医学会泌尿外科分会首届机器人手术视频大赛一等奖，连续获邀在博鳌外科直播手术周、上海东方国际泌尿外科男科手术周等一流学术平台演示机器人手术。
                        </p>
                    </div>
                    
                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-3陈朝晖.png')}
                                alt='陈朝晖'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>陈朝晖</strong>，华中科技大学同济医学院附属协和医院泌尿外科主任医师、副教授、硕士生导师。擅长机器人和腹腔镜下的泌尿系肿瘤的手术治疗以及肾结石、肾积水、前列腺增生、血尿、男性尿失禁的治疗。曾在美国密歇根州奥克兰大学医院完成专科培训。主持和参加多项卫生部临床课题研究和国家自然科学基金项目。曾经参加两项国家重点基础研究发展规划项目（“973”计划）研究并担任主要学术骨干。2006年获得武汉市科技进步一等奖，获得发明专利8项和美国发明专利1项，发表SCI论文30余篇。现任中华医学会泌尿外科分会机器人学组委员，中国性学会泌尿外科分会副主任委员，湖北省中西医结合学会泌尿外科分会常委，武汉市医师协会泌尿外科分会副主任委员，《中华实验外科杂志》通讯编委，《临床泌尿外科杂志》编委。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-4刘征.png')}
                                alt='刘征'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>刘征</strong>，华中科技大学同济医学院附属同济医院泌尿外科主任医师，硕士生导师。德国海德堡大学联合培养博士，德国国立肿瘤研究中心访问学者。中华医学会泌尿外科分会工程学组委员，中国自动化学会机器人专业委员会委员，泌尿外科膀胱癌指南编委，临床泌尿外科杂志编委，现代泌尿生殖肿瘤杂志编委，达芬奇机器人手术主刀证书。湖北省泌外青年学组手术视频比赛连续两届第一名。精通泌尿外科微创手术，包括膀胱癌﹑肾癌﹑前列腺癌的腹腔镜手术和机器人腔镜手术，早期膀胱癌的激光手术，多次在全国和省级专业学会演示手术。特别擅长机器人全腔镜下原位膀胱重建术，对膀胱癌进行精准评估和分层治疗，开展早期膀胱癌卡介苗灌注工作，是该指南制定者。建立同济膀胱癌多学科门诊和肾上腺高血压多学科门诊。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-5胡嘏.png')}
                                alt='胡嘏'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>胡嘏</strong>，华中科技大学同济医学院附属同济医院泌尿外科副主任医师，副教授，硕士生导师。2018年-2020年赴美国哈佛大学医学院附属Beth Israel Deaconess Medical Center癌症中心访问学习。临床擅长泌尿系肿瘤的规范化诊断及微创手术治疗，在复杂泌尿系肿瘤的个体化治疗和多学科综合治疗等方面积累了大量临床经验。2017年入选武汉市青年科技晨光计划。现担任中华医学会泌尿外科学分会基础学组委员，中国医师协会泌尿外科医师分会膀胱癌协作组成员等职务。先后主持国家自然科学基金3项，归国留学人员基金1项，参与国家及省部级课题十余项。科研长期从事肿瘤分子免疫及靶向治疗等相关领域研究，研究成果发表在包括Mol Cell等著名期刊。担任Asian Journal of Urology及《中华泌尿外科杂志》青年编委及多部期刊审稿人。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../ClinicalAdvisoryGroup/临床顾问-6李恒.png')}
                                alt='李恒'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>李恒</strong>，华中科技大学同济医学院附属同济医院泌尿外科副教授、副主任医师。擅长肾肿瘤保留肾脏的微创手术和微创根治术、肾上腺肿瘤保肾上腺的微创手术、前列腺癌保留性功能的微创手术、膀胱肿瘤激光保膀胱手术、膀胱肿瘤快速康复并发症极低的微创根治术，输尿管肿瘤保留肾脏的微创手术等一系列保留器官和功能的泌尿肿瘤微创治疗，以及肾脏和输尿管结石的微创治疗。2022年获人民网评选“人民好医生（泌尿肿瘤领域）·优秀典范”，2021年主持前列腺癌临床诊断治疗研究获中国临床肿瘤学会（CSCO）“泌尿肿瘤代表性进展”。美国加州大学洛杉矶分校博士后。2014-2015年在美国西海岸排名第一的罗纳德·里根医学中心从事泌尿系肿瘤综合治疗研修。美国泌尿外科学会会员，中国抗癌协会肿瘤腔镜与机器人外科分会会员。主持/参与国家级或省部级科研基金5项，在European Urology、Mol Cancer、Mod Path、J Urology等国际顶级TOP期刊或高水平SCI期刊发表论文30余篇。尤其擅长肾肿瘤保留肾脏的微创手术和微创根治术、肾上腺肿瘤保肾上腺的微创手术、前列腺癌保留性功能的微创手术、膀胱肿瘤激光保膀胱手术、膀胱肿瘤快速康复并发症极低的微创根治术、输尿管肿瘤保留肾脏的微创手术等一系列保留器官和功能的泌尿肿瘤微创治疗。
                        </p>
                    </div>

                </div>
            </Content>
        </Layout>
    );
}

export default ClinicalAdvisoryGroup;