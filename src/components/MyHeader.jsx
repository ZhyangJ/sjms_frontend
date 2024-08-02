import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import logo from '../components/logo.png'; // 导入 logo 图片

const { Header } = Layout;

const items = [
    {
        key: '1',
        label: <Link to="/HomePage">首页</Link>,
    },
    {
        key: '2',
        label: <Link to="/Kidney-Cancer-Molecular-Model">肾癌分子模型</Link>,
    },
    {
        key: '3',
        label: <Link to="/DCCD-Features-Overview">DCCD特征概述</Link>,
    },
    {
        key: '4',
        label: <Link to="/Clinical-Significance-Of-DCCD">DCCD临床意义</Link>,
    },
    {
        key: '5',
        label: <Link to="/DCCD-Identification-Tool">DCCD鉴定工具</Link>,
    },
    {
        key: '6',
        label: <Link to="/Team-Introduction">团队介绍</Link>,
    }
];

function MyHeader({ selectedKeys }) {
    const location = useLocation();
    const currentPath = location.pathname; // 获取当前路径
    const defaultSelectedKey = useMemo(() => {
        if (currentPath.startsWith('/HomePage')) {
            return '1';
        }
        else if (currentPath.startsWith('/Kidney-Cancer-Molecular-Model')) {
            return '2';
        } else if (currentPath.startsWith('/DCCD-Features-Overview')) {
            return '3';
        } else if (currentPath.startsWith('/Clinical-Significance-Of-DCCD')) {
            return '4';
        } else if (currentPath.startsWith('/DCCD-Identification-Tool')) {
            return '5';
        } else if (currentPath.startsWith('/Team-Introduction')) {
            return '6';
        } else {
            return null; // 如果没有匹配，不选中导航栏
        }
    }, [currentPath]);

    return (
        <div>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white', // 设置背景颜色为白色
                    marginTop: '20px', // 将整个Header组件向下平移
                    height: '70px', // 设置整个Header组件的高度
                }}
            >
                {/* Logo 放在导航栏左侧 */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center', // 使 logo 在父容器中垂直居中
                    marginRight: '16px', // 给 logo 和菜单项之间添加一些间距
                }}>
                    <img src={logo} alt="logo" style={{ width: '180px', height: '70px' }} />
                </div>
                <Menu
                    theme="light" // 设置菜单的主题为 light，以适应白色背景
                    mode="horizontal"
                    selectedKeys={selectedKeys !== undefined ? selectedKeys : [defaultSelectedKey]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        fontFamily: 'Mukta, sans-serif', // 设置字体为 Mukta
                        fontWeight: '600', // 设置字体粗细为 semiBold
                        fontSize: '16px', // 设置字体大小为 20px
                    }}
                />
            </Header>
        </div>
    )
}

export default MyHeader;
