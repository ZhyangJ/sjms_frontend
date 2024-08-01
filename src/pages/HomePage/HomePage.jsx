import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
import backgroundImg from '../../pages/HomePage/背景.png'; // 导入背景图片
import chinaKidneyImg from '../../pages/HomePage/中国肾癌.png'; // 导入图片
import usKidneyImg from '../../pages/HomePage/美国肾癌.png'; // 导入图片
import videoSrc from '../../pages/HomePage/肾癌科普视频.mp4'; // 导入视频

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
                    position: 'relative',
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
                        minHeight: 580,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {/* 背景图片的矩形区域，宽度与整个界面一致 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%', // 设置宽度为100%，确保与界面一致
                            height: '140px', // 设置高度为140px
                            backgroundImage: `url(${backgroundImg})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.25, // 设置透明度
                            zIndex: -1, // 确保背景图片在文字后面
                        }}
                    ></div>

                    {/* 文字内容区域 */}
                    <div
                        style={{
                            position: 'relative', // 确保文字显示在背景图片之上
                            zIndex: 1, // 确保文字在背景图片之上
                            paddingTop: '0px', // 减少文字区域距离顶部的距离
                        }}
                    >
                        <div
                            style={{
                                fontFamily: '思源黑体, sans-serif',
                                fontWeight: '900',
                                fontSize: '30px',
                                marginBottom: '8px', // 调整底部间距
                                color: 'black', // 确保文字保持黑色
                            }}
                        >
                            肾机妙算——肾癌精准医疗平台
                        </div>
                        <div
                            style={{
                                fontFamily: '思源黑体, sans-serif',
                                fontWeight: '400',
                                fontSize: '30px',
                                color: 'black', // 确保文字保持黑色
                            }}
                        >
                            Earlier diagnosis, earlier treatment
                        </div>
                    </div>

                    {/* 新建三个矩形方框 */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '100px', // 向上平移三个方框，减少 marginTop 值
                        }}
                    >
                        {/* 左边第一个方框 */}
                        <div
                            style={{
                                width: '30%',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '8px',
                                padding: '16px',
                                textAlign: 'center',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <img
                                src={chinaKidneyImg}
                                alt="中国肾癌"
                                style={{
                                    width: '400px', // 固定宽度为400px
                                    height: '230px', // 固定高度为230px
                                    objectFit: 'cover', // 确保图片在框内覆盖
                                    borderRadius: '8px',
                                }}
                            />
                            <div
                                style={{
                                    marginTop: '8px',
                                    fontFamily: '思源黑体, sans-serif',
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    color: 'black',
                                }}
                            >
                                中国肾癌发病
                            </div>
                        </div>

                        {/* 中间方框 */}
                        <div
                            style={{
                                width: '30%',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '8px',
                                padding: '16px',
                                textAlign: 'center',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <video
                                src={videoSrc}
                                controls
                                style={{
                                    width: '400px', // 固定宽度为400px
                                    height: '230px', // 固定高度为230px
                                    objectFit: 'cover', // 确保视频在框内覆盖
                                    borderRadius: '8px',
                                }}
                            />
                            <div
                                style={{
                                    marginTop: '8px',
                                    fontFamily: '思源黑体, sans-serif',
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    color: 'black',
                                }}
                            >
                                肾癌诊疗状况
                            </div>
                        </div>

                        {/* 右边方框 */}
                        <div
                            style={{
                                width: '30%',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '8px',
                                padding: '16px',
                                textAlign: 'center',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <img
                                src={usKidneyImg}
                                alt="美国肾癌"
                                style={{
                                    width: '400px', // 固定宽度为400px
                                    height: '230px', // 固定高度为230px
                                    objectFit: 'fill', // 拉伸以确保图片显示完整
                                    borderRadius: '8px',
                                }}
                            />
                            <div
                                style={{
                                    marginTop: '8px',
                                    fontFamily: '思源黑体, sans-serif',
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    color: 'black',
                                }}
                            >
                                美国肾癌发病
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <MyFooter />
        </Layout>
    );
};

export default HomePage;
