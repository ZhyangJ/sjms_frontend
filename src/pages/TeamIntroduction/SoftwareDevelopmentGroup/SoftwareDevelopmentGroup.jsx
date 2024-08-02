// 软件研发组
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

const SoftwareDevelopmentGroup = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content >
                
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>软件研发组</h2>
                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-1李瑞轩.png')}
                                alt='李瑞轩'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>李瑞轩</strong>，肾癌精准诊疗平台软件开发首席专家，现任华中科技大学计算机科学与技术学院副院长，湖北省数据库工程技术研究中心主任，湖北省大数据应用工程企校联合创新中心主任，湖北省大数据安全工程技术研究中心副主任，分布式系统安全湖北省重点实验室副主任，大数据与国家传播战略教育部哲学社会科学实验室副主任，华中科技大学智能与分布计算实验室主任，华中科技大学计算机科学与技术学院教授，中国科学院信息工程研究所兼职研究员，中国人工智能学会人工智能与安全专业委员会副主任，中国计算机学会杰出会员，中国计算机学会大数据专家委员会委员，加拿大康考迪亚大学信息系统工程研究所兼职教授。带领的研究团队主要围绕数据智能处理与分析理论与方法开展相关工作，取得了一系列创新研究成果，研究成果发表在IEEE TC、TPDS、TDSC、JSAC、NeurIPS、AAAI、SIGIR、CCS、DAC、INFOCOM等著名期刊和会议上，并应用于华为、百度、烽火、中国电信、中软、达梦等企业产品中，解决业务瓶颈问题，大幅度提高企业服务效率，降低了运营成本。坚持开放与联合，与华为、烽火、百度、蚂蚁等国内外知名企业保持着密切合作，建立了华中科技大学-财富趋势大数据智能与安全联合研究中心，积极推动科研成果落地转化。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-2王号召.png')}
                                alt='王号召'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>王号召</strong>，博士毕业于华中科技大学计算机科学与技术专业，目前在校留任做师资博士后。2018年至2021年赴香港理工大学计算机学院交流访问，2023年至2024年赴南洋理工大学计算机学院进行交流访问。主要从事可信智能与分布式智能研究，在保护用户隐私的前提下为智能化医疗诊断提供可信保障。首次提出基于解释与预测一体化编码器的自然语言处理模型，大幅度提高了人工智能模型的可解释性，为医用领域的疾病诊断开创了新的道路。近五年来在ICLR、CVPR、NeurIPS、KDD等国际顶级会议和IEEE JSAC、IEEE TC、IEEE TMC等国际顶级期刊上共发表超50篇论文，其中超30篇论文为中国计算机学会推荐的A类论文，申请国家发明专利11项，两项成果完成应用转化，均获高度赞誉，参与起草可信人工智能国家标准1项，参与撰写人工智能专著1项，获湖北省科技奖进步一等奖、中国产学研促进学会产学研合作创新成果奖二等奖，ACM中国武汉分会优博奖，主持国家自科基金项目青年基金1项，参与国家重点基金、国家重点研发计划等多项纵向课题以及与蚂蚁集团、财富趋势等多项横向课题。在学术服务方面，担任第四十一届机器学习国际会议（The 41st International Conference on Machine Learning，ICML 2024，三大顶级人工智能会议之一）领域主席，作为知识发现与数据挖掘国际会议（KDD 2024、2025）、神经信息处理国际会议（NeurIPS 2022、2023、2024）等顶级会议组织成员。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-3胡俊逸.jpg')}
                                alt='胡俊逸'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>胡俊逸</strong>，华中科技大学同济医学院附属同济医院泌尿外科在站博士后。主持国家资助博士后研究人员计划项目（A档）；以第一作者及通讯作者（含共同）在Nat Genet，Nat Commun，Cell Rep Med，Mol Ther等杂志发表SCI论文10篇，其中IF>10五篇。获得国家授权发明专利1项。获得华中科技大学同济医学院裘法祖奖学金。拥有多年生物信息学分析经验，专注于利用计算生物学技术解决生命科学中的复杂问题。熟练掌握并精通R语言、Python和Linux编程，能够高效地进行大规模数据处理、统计分析、机器学习模型构建及可视化展示。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-4易小泉.jpg')}
                                alt='易小泉'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>易小泉</strong>，华中科技大学计算机科学与技术学院博士研究生。研究领域聚焦在前沿的人工智能技术，主要致力于联邦学习、大模型文本识别以及虚假内容检测等方向的研究。联邦学习允许多个机构协作训练模型，无需直接分享患者数据，从而保护了数据隐私和安全性。这在医疗领域尤为重要，因为医疗数据往往包含敏感的个人信息可以使用联邦学习来整合来自不同医院的转录组测序数据，共同训练一个更强大、更全面的预测模型。使用大模型进行文本识别可以帮助快速筛选和理解这些文献，提取关键信息，如疾病的新疗法、药物副作用等，这对于保持最新医学知识、制定临床指南和研究方向至关重要。基于大模型的检测技术可以用于识别和过滤不准确的医疗信息，帮助医生、研究人员和患者做出基于事实的决策，特别是在肾癌治疗方案的选择上，确保信息来源的可靠性对患者的安全和治疗效果有着直接影响。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-5李亦晨.jpg')}
                                alt='李亦晨'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>李亦晨</strong>，华中科技大学计算机科学与技术学院2023级直博生，师从李瑞轩教授。主要从事分布式智能研究，在保护用户隐私的前提下，为智能化医疗系统的维护开销和诊断性能提供保障。首次提出低资源开销下的高效联邦持续学习框架，大幅度促进了分布式模型在医疗系统中的落地部署。参与国家重点基金、国家重点研发计划等多项纵向课题以及与蚂蚁集团多项横向课题。近五年来以一作/共同一作在CVPR、ICLR、ECCV、IEEE TPDS等国际会议和顶级期刊上发表7篇论文，担任NeurIPS、ICME、ICPR等顶级会议和期刊独立审稿人。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-6熊熙.jpg')}
                                alt='熊熙'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>熊熙</strong>，华中科技大学计算机技术专业硕士在读，具备扎实的编程基础和丰富的项目经验。曾独立开发微信小程序（针对医院药房的需求，开发了一个药品销售数据分析系统，通过微信小程序，药房管理人员可以上传日常药品销售数据。后端使用Python进行数据清洗，包括去重、缺失值处理和异常值处理。综合运用Apriori、FP-growth等关联规则算法和分类算法进行数据分析，找出常见的药品组合。系统还能识别畅销药品和滞销药品，为药品采购和库存管理提供数据支持，优化药房运营效率）、参与开发校园拼车应用（针对在校学生出行费用高、拼车信息分散、难以寻找拼车伙伴的问题，开发应用实现校园拼车信息集中发布，设计算法对用户出行信息进行合理排序，便于用户寻找拼车伙伴）、参加了学院组织的"健康农村"公益项目，旨在提高农村地区的健康意识和医疗可及性。在团队中主要负责健康教育内容的策划和线上推广。利用抖音、快手等短视频平台，制作并发布了一系列通俗易懂的健康科普视频）。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-7刘虹.jpg')}
                                alt='刘虹'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>刘虹</strong>，华中科技大学计算机技术专业硕士在读，具备扎实的编程基础和丰富的项目经验。曾参与医疗考勤系统开发（负责医护人员外出请假休假登记模块和医疗系统三员针对上下班时间和节假日上班时间定制模块；针对医疗系统管理员，提供相应权限进行相关功能的访问）。参与医疗知识库系统开发（负责医疗诊断工具元数据映射模块和医疗病例知识分享管理模块，以及从Hadoop下载医疗知识到本地的功能；医疗系统管理员可以管理医疗诊断工具模型和医疗知识库中医疗诊断模型单位的映射关系，用于在医疗诊断工具软件导入医疗诊断模型时提供单位转换支持）。参与医疗数据挖掘项目“患病人员术后复诊需求分析及复发预测”，对数据集进行预处理转化，利用随机森林分类器和K最近邻分类器进行分析和预测，比较了各医院病例的复诊需求和复发率及其预测。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-8姜家辉.jpg')}
                                alt='姜家辉'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>姜家辉</strong>，华中科技大学计算机科学与技术专业硕士在读，具备扎实的编程基础和丰富的项目经验。参与医疗考勤系统项目开发（主要负责：医护人员登录后查看个人考勤信息，以及迟到，早退等统计信息等功能实现。针对医院管理员角色，提供后台管理界面，提供权限管理功能、查看所有医护人员考勤记录功能），参与医疗知识库项目开发（负责大模型应用模块，医护人员根据已有的病例知识库，基于RAG框架实现智能写作，在RAG框架上增加用户输入预处理、多知识库检索、递归摘要与树形检索(RAPTOR)、生成质量评估、事实性输出（Self-RAG），使模块能够实现利用已有的病例知识库生成，自定义知识库生成，多文档生成功能，并保证生成高质量和高可靠的病例文本；同时负责病例等知识库内容的预览）。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-9刘平根.jpg')}
                                alt='刘平根'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>刘平根</strong>，华中科技大学计算机技术专业硕士在读，具备扎实的编程基础和丰富的项目经验，尤其在医疗信息化领域有着深入的实践和探索。在开发医疗考勤系统项目中，负责设计和实现工作日历模块，用于直观统计医护人员每日的考勤简报，并包含迟到、早退等统计信息。此外，还负责外出登记模块，确保医护人员外出记录的准确性和及时性，为医院的人力资源管理提供了有效支持。参与开发医院知识库项目，在项目中承担了知识上传模块的设计与实现。该模块允许医护人员创建文件知识和参数化知识，使用Hadoop文件系统进行大规模医疗数据存储，并利用ElasticSearch技术创建知识索引，显著提升了医疗知识的检索效率。同时，负责知识应用智能问答模块的开发，基于RAG（Retrieval-Augmented Generation）技术，使大规模语言模型（LLM）能够利用现有的医疗知识库生成针对用户查询的事实性回答，从而为临床诊断和决策支持提供了智能化的解决方案。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-10张晨冉.jpg')}
                                alt='张晨冉'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>张晨冉</strong>，华中科技大学计算机技术专业硕士在读，具备扎实的编程基础和丰富的项目经验。参与医疗考勤系统开发（医护人员登录后可以查看同科室的人员状态信息，包括签到，迟到等统计信息。针对医疗系统管理员，提供日志查看功能，日志记录了所有医护人员的各类考勤操作）、参与医疗知识库开发（负责医疗知识模板配置和个人医疗知识管理模块，医护人员定义需要使用的医疗知识模板，采用Hadoop上传相关文件，根据定义好的医疗知识模板上传所需医疗知识，并支持医护人员对上传后的医疗知识进行各类管理操作，医护人员能够随时更新、修正和补充医疗知识库，提高医疗决策的科学性和准确性）、参与数据挖掘项目“医患人员术后复诊需求分析及复发预测”（对数据集进行去重、缺失值转化等预处理操作，利用随机森林分类器和K最近邻分类器对医患人员术后复诊需求进行了分析和预测）。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-11金洲杨.jpg')}
                                alt='金洲杨'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>金洲杨</strong>，武汉理工大学软件工程专业本科在读，具备扎实的编程基础和丰富的项目经验。参与健康监测系统微信小程序开发（利用微信小程序技术实现了便捷的用户界面和交互设计，并通过Java和Spring Boot构建了高效的后台服务，确保数据的快速处理与传输，同时使用MySQL进行数据存储和管理，保障了数据的完整性与安全性。该小程序支持用户记录和分析血压、心率、体温等健康数据，并提供健康提醒和建议，极大地提升了用户的健康管理体验）。参与开发医院管理系统，主要负责病人注册登录、病历管理、预约挂号等功能，极大地提升了医院的管理效率和病人的就诊体验。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-12胡浩然.jpg')}
                                alt='胡浩然'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>胡浩然</strong>，武汉理工大学计算机科学与技术专业本科在读，具备丰富的编程基础和机器学习项目经验，能够熟练地使用python、R等语言进行数据处理、统计分析和数学建模。武汉理工大学数学建模校队预备队员。曾参与癌症病理状态判定模型开发（使用DESeq2和MIC等算法筛选基因，并训练soft-max分类器判定患者癌症病理状态）；曾参与基于量子计算的物流优化模型开发（通过建立 QUBO 模型、引入量子计算技术合理制定货物运输方案）。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-13黎鲍杰.png')}
                                alt='黎鲍杰'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>黎鲍杰</strong>，武汉理工大学计算机与人工智能学院本科生，具备扎实的编程基础。参与开发医疗可视化管理系统，用户病情查看系统允许患者和家属轻松查看患者的健康状况、诊断结果和治疗计划，而医生管理系统则支持医生快速访问患者的电子病历，并进行更新和注释。熟练掌握Python及其相关技术栈，利用Python爬虫技术抓取和处理网络上的医疗数据。具备丰富的Android应用程序开发经验，熟练掌握Kotlin和Java这两种语言，独立完成了健康备忘录应用的开发，具备数据记录、数据分类和数据管理等功能，极大地便利了用户对健康的管理。熟练掌握Jetpack Compose框架，保障产品具有实用又良好的用户体验，提高应用界面的美观性和交互性。另外，也参与多项桌面程序的开发，包括使用Kotlin和Java开发多款趣味性游戏。
                        </p>
                    </div>

                    <div>
                        <div style={picStyle}>
                            <img 
                                src={require('../SoftwareDevelopmentGroup/软件开发-14任奕航.jpg')}
                                alt='任奕航'
                                style={{
                                    width:'100%',
                                    height:'100%'
                                }}
                            />
                        </div>
                        
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>任奕航</strong>，武汉理工大学计算机与人工智能学院学生，具备丰富的编程经验。参与基于人工智能的医疗诊断系统，利用Java开发患者健康在线监测后端平台。具体而言，使用Java来集成PyTorch深度学习框架，训练模型以识别医学影像中的异常特征。同时，采用利用Java的数据库连接能力，更好地管理和分析大量的医疗数据，并结合Hadoop或Spark等大数据处理工具，高效地处理和存储这些数据。此外，还参与开发用户友好的移动应用程序，通过Java的Android开发框架来实现，让患者能够轻松地获取个性化的健康建议和监测报告。
                        </p>
                    </div>

                </div>
            </Content>
        </Layout>
    );
}

export default SoftwareDevelopmentGroup;