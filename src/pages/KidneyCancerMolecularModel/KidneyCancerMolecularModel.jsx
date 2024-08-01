import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyHeader from '../../components/MyHeader';
import MyFooter from '../../components/MyFooter';
const { Content } = Layout;

const KidneyCancerMolecularModel = () => {
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
                        minHeight: '800px',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            fontFamily: '思源黑体',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            marginBottom: '24px',
                        }}
                    >
                        一、为什么要研究肿瘤的分型？
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            fontFamily: '思源黑体',
                            fontWeight: 'normal',
                            fontSize: '18px',
                            width: '700px',
                            height: '160px',
                            lineHeight: '1.5',
                            marginRight: '48px'
                        }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;世界上没有两片雪花是相同的，同理，世界上并没有两个相同的肿瘤。即使是转移瘤及原位瘤之间，抑或是同一个人不同时期的肿瘤都不相同，即肿瘤异质性。这也是同种肿瘤的人群接受相同治疗之后，效果差异巨大的原因。因此，通过技术手段发现代表性的分子，从而区分肿瘤不同的亚型，有助于找出更有针对性的治疗方式，达到精准医疗的目的，有助于提高患癌人群的生存率（图1）。
                        </div>

                        <div>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/1.png')}
                                alt="图1.肿瘤分型有助于精准医疗"
                                style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                textAlign: 'center',
                                maxWidth: '300px'
                            }}>
                                图(1)注：肿瘤分型有助于精准医疗
                            </div>
                        </div>
                    </div>
                    {/* Green divider line */}
                    <div style={{
                        marginTop: '24px',
                        width: '1350px',
                        height: '2px',
                        backgroundColor: '#38B474',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} />
                    {/* Second title */}
                    <div
                        style={{
                            fontFamily: '思源黑体',
                            fontWeight: 'bold',
                            fontSize: '28px',
                            marginTop: '24px',
                            marginBottom: '24px',
                        }}
                    >
                        二、肾透明细胞癌(ccRCC)现有的分型有哪些？
                    </div>

                    {/* Rectangle */}
                    <div style={{
                        width: '1400px',
                        height: '850px',
                        position: 'relative',
                        // backgroundColor: '#F5F5F5',
                        marginTop: '0px',
                        margin: '0 auto'

                    }}>
                        <div style={{
                            width: '310px',
                            height: '150px',
                            position: 'absolute',
                            left: '100px',
                            top: '0px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left' // Align text to the left
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;肾透明细胞癌(ccRCC)约占据肾癌的75%，是肾癌最常见的病理类型。近年来，越来越多的分子分型研究评估了影响ccRCC患者对靶向治疗和免疫治疗疗效的因素。在早期，TCGA项目通过基因组、表观基因组和转录组等水平检测，
                            鉴定出包括VHL基因失调在内的ccRCC靶标（https://www.cancer.gov/tcga）。
                        </div>
                        <div style={{
                            width: '310px',
                            height: '80px',
                            position: 'absolute',
                            left: '100px',
                            top: '130px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left', // Align text to the left
                            whiteSpace: 'normal', // Ensure text wraps as needed
                            wordBreak: 'break-word' // Allow words to break and wrap onto the next line
                        }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管该项目成果证明了分子表征的价值，<strong>其在临床治疗中的指导意义仍然十分有限，患者的治疗反应并不理想。</strong>
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '100px',
                            top: '210px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/2.png')}
                                alt="图2.表观基因组"
                                style={{ width: '290px', height: '180px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图2.表观基因组
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            left: '40px',
                            top: '430px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/3.png')}
                                alt="图2.基因组"
                                style={{ width: '115px', height: '135px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图注：基因组
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            left: '156px',
                            top: '460px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/4.png')}
                                alt="图注：转录组"
                                style={{ width: '180px', height: '80px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '32px',
                                color: '#3D3D3D'
                            }}>
                                图注：转录组
                            </div>
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '340px',
                            top: '450px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/5.png')}
                                alt="图注：蛋白质组"
                                style={{ width: '140px', height: '100px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '20px',
                                color: '#3D3D3D'
                            }}>
                                图注：蛋白质组
                            </div>
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '100px',
                            top: '640px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/6.png')}
                                alt="图6.CPTAC团队基于免疫建立的4种亚型"
                                style={{ width: '300px', height: '150px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '20px',
                                color: '#3D3D3D'
                            }}>
                                图6.CPTAC团队基于免疫建立的4种亚型
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            left: '500px',  // 这里设置线的水平位置
                            top: '20px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />

                        <div style={{
                            position: 'absolute',
                            left: '500px',  // 这里设置线的水平位置
                            top: '320px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />


                        <div style={{
                            position: 'absolute',
                            left: '500px',  // 这里设置线的水平位置
                            top: '620px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />

                        <div style={{
                            width: '280px',
                            height: '325px',
                            position: 'absolute',
                            left: '560px',
                            top: '10px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left' // Align text to the left
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2019年，来自美国Johns Hopkins大学的CPTAC团队在Cell杂志上发表了对103名未接受治疗的ccRCC患者肿瘤样本的多组学研究结果[1]。该研究结合基因组学、表观基因组学、转录组学、蛋白质组学和磷酸化蛋白质组学的分析（图2-5），发现了蛋白质组和表观修饰水平上的肿瘤特异性改变，并通过xCell算法分析了肿瘤微环境的细胞转录表达谱，鉴定出四种基于免疫的分子亚型：CD8+炎症型、CD8-炎症型、VEGF免疫缺陷型和代谢免疫缺陷型（图6）。4种亚型展示了各自独特的基因组特征和肿瘤微环境的异质性，并一定程度上预测了治疗反应，旨在推动患者的分层治疗。然而，如何在临床上区分这四种分子亚型并进行精准治疗，仍然缺乏可量化的诊疗依据。此外，xCell算法并未充分考虑ccRCC本身的特征性表达，尤其是巨噬细胞和肿瘤细胞的表达谱特征，这一漏洞影响了靶标选择的准确性，也是肾癌分子分型研究面临的共同问题。
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: ' 560px',
                            top: '360px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/7.png')}
                                alt="图7.Robert J. Motzer教授团队基于TKI反应疗效建立的4种亚型"
                                style={{ width: '270px', height: '105px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图7.Robert J. Motzer教授团队基于TKI反应疗效建立的4种亚型
                            </div>
                        </div>


                        <div style={{
                            width: '275px',
                            height: '200px',
                            position: 'absolute',
                            left: '560px',
                            top: '540px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left' // Align text to the left
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 来自美国Memorial Sloan Kettering癌症中心的Robert J. Motzer教授团队于2019年在Cancer Discovery上发表了一项对COMPARZ III期临床试验的研究[2]。通过对409例转录组数据进行非负矩阵分解（NMF）聚类，确定了ccRCC患者在酪氨酸激酶抑制剂 (TKI) 治疗后存在明显不同生存结局的4种分子亚型。与1-3型相比， 4型呈现TP53 和 BAP1 的突变富集以及高度浸润PD-L1阳性巨噬细胞，显示出最差的生存结局。而3型有最高的血管生成和最低的巨噬细胞浸润，预后最好（图7）。这项研究强调了肿瘤微环境对TKI治疗反应的重要性，并提出血管生成和巨噬细胞浸润是TKI反应的关键决定因素。
                        </div>



                        <div style={{
                            position: 'absolute',
                            left: '880px',  // 这里设置线的水平位置
                            top: '20px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />

                        <div style={{
                            position: 'absolute',
                            left: '880px',  // 这里设置线的水平位置
                            top: '320px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />


                        <div style={{
                            position: 'absolute',
                            left: '880px',  // 这里设置线的水平位置
                            top: '620px',    // 这里设置线的垂直位置
                            width: '2px',
                            height: '200px',
                            backgroundColor: '#38B474',
                        }} />


                        <div style={{
                            width: '450px',
                            height: '285px',
                            position: 'absolute',
                            left: '920px',
                            top: '10px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left' // Align text to the left
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020年，同样是来自美国Memorial Sloan Kettering癌症中心的Mahrukh A. Huseni教授团队在Cancer Cell上发表了一项研究。基于IMmotion151 III期临床试验的转录组数据，该团队对823例接受单独靶向治疗或靶向联合免疫治疗的晚期ccRCC患者的测序数据进行了NMF聚类，确定了七种分子亚型[3]。1型有高度血管生成表现，富集血管和VEGF通路相关基因（Angiogenic/Stromal 型）；2型高度表达成纤维细胞来源的基因与中等的T-effector基因特征表达(Angiogenic型)；3型种与补体级联相关的基因表达增加(Complement/U-oxidation 型)；4型具有高度免疫原性，体现在免疫基因表达模块的强烈富集以及高度免疫细胞浸润(T-effector/Proliferative型)；5型的特点是细胞周期蛋白上调、代谢通路失调和肿瘤侵袭性增加(Proliferativee型)；6型显示上皮-间质转化( EMT )转录模块的高表达以及胶原蛋白和成纤维细胞相关的基质基因富集(Stromal/Proliferative型)；7型特点是富集了snoRNA的表达，尤其是与表观遗传和翻译改变有关的C/D box snoRNA (snoRNA型)。他们还提出，舒尼替尼或者阿替利珠单抗+贝伐珠单抗的两种治疗措施对高血管生成的亚群都有效，而阿替利珠单抗+贝伐珠单抗更有利于高T - effector和/或细胞周期转录的亚群的临床获益（图8）。
                        </div>
                        <div style={{
                            width: '450px',
                            height: '285px',
                            position: 'absolute',
                            left: '920px',
                            top: '280px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '12px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left' // Align text to the left
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2022年，来自法国的Yann-Alexandre Vano教授团队在Lancet Oncology上发表了BIONIKK研究[4]。基于该团队先前的研究，他们使用一个包含35个基因的分类器，将236名未接受治疗的转移性ccRCC患者分为ccrcc1-4型：ccrcc1型免疫缺乏；ccrcc2型富含血管，ccrcc3型与正常组织相似，ccrcc4型呈现免疫及炎症浸润。最终有199名患者被随机分组并成功接受前瞻性的临床试验治疗，分别为纳武单抗组，纳武单抗+伊匹木单抗组，抗血管生成抑制剂+酪氨酸激酶抑制剂组（VEGFR-TKI组）。随访18个月后，其团队发现：在被认为是免疫沙漠的ccrcc1型中，与单独使用纳武单抗相比，纳武单抗+伊匹木单抗联用提高了反应率，延长了中位无进展生存期。相反，在被认为是免疫浸润和炎症的ccrcc4型中，两组的反应率非常高且接近。在ccrcc4型中，与ccrcc1型相比，两种基于纳武单抗的治疗方法均提供了更高的反应率和更长的中位无进展生存期。在促血管生成表型的ccrcc2组中，VEGFR - TKI和纳武单抗+伊匹木单抗均提供了较高的反应率（图9）。总的来说，他们的结果表明ccrcc4型患者可能是接受纳武单抗+伊匹木单抗的最佳候选者。
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '920px',
                            top: '580px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/8.png')}
                                alt="图8.Mahrukh A. Huseni教授团队建立的7种亚型疗效对比"
                                style={{ width: '190px', height: '120px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图8.Mahrukh A. Huseni教授团队<br />建立的7种亚型疗效对比
                            </div>
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '1130px',
                            top: '580px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/9.png')}
                                alt="图9.Yann-Alexandre Vano教授团队建立的4种亚型在前瞻性不同药物治疗下的疗效对比"
                                style={{ width: '230px', height: '120px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图9.Yann-Alexandre Vano教授团队建立的4种<br />亚型在前瞻性不同药物治疗下的疗效对比
                            </div>
                        </div>


                        <div style={{
                            position: 'absolute',
                            top: '840px',
                            width: '1350px',
                            height: '2px',
                            backgroundColor: '#38B474',

                        }} />

                    </div>
                    {/* 区域二在此结束 */}


                    {/* Rectangle */}
                    <div style={{
                        width: '1400px',
                        height: '300px',
                        position: 'relative',
                        // backgroundColor: '#F5F5F5',
                        marginTop: '0px',
                        margin: '0 auto'

                    }}>
                        <div
                            style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'bold',
                                fontSize: '28px',
                                marginTop: '24px',
                                marginBottom: '24px',
                            }}
                        >
                            三、亟待解决的问题
                        </div>



                        <div style={{
                            width: '380px',
                            height: '220px',
                            position: 'absolute',
                            left: '80px',
                            top: '40px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left', // Align text to the left
                            whiteSpace: 'normal', // Ensure text wraps as needed
                            wordBreak: 'break-word' // Allow words to break and wrap onto the next line
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分子分型研究如火如荼，这些研究表明不同亚型的ccRCC患者在预后和临床治疗应答上存在显著的差异。
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尽管分子分型为治疗选择提供了重要的临床参考，<strong>但目前繁多的分子分型模式均未能将多组学研究与临床实践充分结合，缺乏统一、可量化的标准体系，尚无法全面应用于临床诊疗。</strong>
                        </div>




                        <div style={{
                            width: '420px',
                            height: '240px',
                            position: 'absolute',
                            left: '940px',
                            top: '40px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left', // Align text to the left
                            whiteSpace: 'normal', // Ensure text wraps as needed
                            wordBreak: 'break-word' // Allow words to break and wrap onto the next line
                        }}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，我们的团队招募了100名患者，形成首个中国ccRCC大队列，通过<strong>转录组、外显子组、蛋白组、代谢组</strong>等测序手段，全球首个创新性地建立了<strong>ccRCC的DCCD两分类方法</strong>，并制定和建立<strong>早期ccRCC术后诊疗体系</strong>。
                            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>旨在为广大ccRCC患者群体提供精准便捷的诊疗服务</strong>，将科研应用于临床，我们开发了<strong>“肾机妙算”——肾癌精准诊疗平台</strong>。
                        </div>


                        <div style={{
                            position: 'absolute',
                            left: '540px',
                            top: '70px', // Adjust top value to position the image below the text box
                            textAlign: 'center', // Center the image and caption
                        }}>
                            <img
                                src={require('../../pages/KidneyCancerMolecularModel/10.jpg')}
                                alt="图注：“肾机妙算”——肾癌精准诊疗平台"
                                style={{ width: '360px', height: '150px' }}
                            />
                            <div style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'normal',
                                fontSize: '10px',
                                marginTop: '8px',
                                color: '#3D3D3D'
                            }}>
                                图注：“肾机妙算”——肾癌精准诊疗平台
                            </div>
                        </div>


                        <div style={{
                            position: 'absolute',
                            top: '280px',
                            left: '10px',
                            width: '450px',
                            height: '2px',
                            backgroundColor: '#38B474',

                        }} />


                        <div style={{
                            position: 'absolute',
                            top: '280px',
                            right: '30px',
                            width: '450px',
                            height: '2px',
                            backgroundColor: '#38B474',

                        }} />

                    </div>
                    {/* 区域三在此结束 */}

                    {/* Rectangle */}
                    <div style={{
                        width: '1400px',
                        height: '400px',
                        position: 'relative',
                        // backgroundColor: '#F5F5F5',
                        marginTop: '0px',
                        margin: '0 auto'

                    }}>
                        <div
                            style={{
                                fontFamily: '思源黑体',
                                fontWeight: 'bold',
                                fontSize: '28px',
                                marginTop: '24px',
                                marginBottom: '24px',
                            }}
                        >
                            四、参考文献
                        </div>


                        <div style={{
                            width: '1280px',
                            height: '180px',
                            position: 'absolute',
                            left: '60px',
                            top: '60px',
                            fontFamily: 'Source Han Sans',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: '0em',
                            fontVariationSettings: '"opsz" auto',
                            fontFeatureSettings: '"kern" on',
                            color: '#3D3D3D',
                            padding: '10px',
                            borderRadius: '8px', // Optional rounded corners
                            textAlign: 'left', // Align text to the left
                            whiteSpace: 'normal', // Ensure text wraps as needed
                            wordBreak: 'break-word' // Allow words to break and wrap onto the next line
                        }}>

                            [1]  CLARK D J, DHANASEKARAN S M, PETRALIA F, et al. Integrated Proteogenomic Characterization of Clear Cell Renal Cell Carcinoma [J]. Cell, 2019, 179(4): 964-83.e31.
                            <br></br>[2]  HAKIMI A A, VOSS M H, KUO F, et al. Transcriptomic Profiling of the Tumor Microenvironment Reveals Distinct Subgroups of Clear Cell Renal Cell Cancer: Data from a Randomized Phase III Trial [J]. Cancer discovery, 2019, 9(4): 510-25.
                            <br></br>[3]  MOTZER R J, BANCHEREAU R, HAMIDI H, et al. Molecular Subsets in Renal Cancer Determine Outcome to Checkpoint and Angiogenesis Blockade [J]. Cancer cell, 2020, 38(6): 803-17.e4.
                            <br></br>[4]  VANO Y A, ELAIDI R, BENNAMOUN M, et al. Nivolumab, nivolumab-ipilimumab, and VEGFR-tyrosine kinase inhibitors as first-line treatment for metastatic clear-cell renal cell carcinoma (BIONIKK): a biomarker-driven, open-label, non-comparative, randomised, phase 2 trial [J]. The Lancet Oncology, 2022, 23(5): 612-24.
                            <br></br>[5] Hu, J, Wang, S, Hou, Y, et al. Multi-omic profiling of clear cell renal cell carcinoma identifies metabolic reprogramming associated with disease progression [J]. Nat Genetics, 2024, Mar;56(3):442-457.
                        </div>


                    </div>
                    {/* 区域四在此结束。 */}



                </div>
            </Content>
            <MyFooter />
        </Layout >
    );
}

export default KidneyCancerMolecularModel;
