import { Layout } from 'antd';
const { Footer } = Layout;

const MyFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
                padding: '10px 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
                width: '100%',
            }}>
                <div style={{
                    backgroundColor: '#38B474',
                    width: '100vw',
                    height: '61px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}>
                    {/* 左边白色线条 */}
                    <div style={{
                        content: '',
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        width: 'calc(50% - 50px)',
                        borderTop: '1.5px solid #fff',
                        transform: 'translateY(-50%)',
                    }}></div>

                    {/* 中间文本 */}
                    <div style={{
                        fontFamily: 'Mukta, sans-serif', // 使用 Mukta 字体
                        fontWeight: 800, // 设置为 Extrabold (800)
                        fontSize: '18px', // 字体大小为 24px
                        color: '#fff',
                        padding: '0 20px',
                        whiteSpace: 'nowrap',
                        zIndex: '1',
                    }}>
                        “肾”机妙算
                    </div>

                    {/* 右边白色线条 */}
                    <div style={{
                        content: '',
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        width: 'calc(50% - 50px)',
                        borderTop: '1.5px solid #fff',
                        transform: 'translateY(-50%)',
                    }}></div>
                </div>
            </div>
            肾机妙算 ©{new Date().getFullYear()} Created by IDC
        </Footer>
    );
}

export default MyFooter;
