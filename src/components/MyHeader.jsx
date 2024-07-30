import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
const { Header } = Layout;

const items = [
    {
        key: '1',
        label: <Link to="/Kidney-Cancer-Molecular-Model">肾癌分子模型</Link>,
    },
    {
        key: '2',
        label: <Link to="/DCCD-Features-Overview">DCCD特征概述</Link>,
    },
    {
        key: '3',
        label: <Link to="/Clinical-Significance-Of-DCCD">DCCD临床意义</Link>,
    },
    {
        key: '4',
        label: <Link to="/DCCD-Identification-Tool">DCCD鉴定工具</Link>,
    },
    {
        key: '5',
        label: <Link to="/Team-Introduction">团队介绍</Link>,
    }
];

function MyHeader({ selectedKeys }) {
    const location = useLocation();
    const currentPath = location.pathname; // 获取当前路径
    const defaultSelectedKey = useMemo(() => {
        if (currentPath.startsWith('/Kidney-Cancer-Molecular-Model')) {
            return '1';
        } else if (currentPath.startsWith('/DCCD-Features-Overview')) {
            return '2';
        } else if (currentPath.startsWith('/Clinical-Significance-Of-DCCD')) {
            return '3';
        } else if (currentPath.startsWith('/DCCD-Identification-Tool')) {
            return '4';
        }else if (currentPath.startsWith('/Team-Introduction')) {
            return '5';
        }else {
            return null; // 如果没有匹配，不选中导航栏
        }
    }, [currentPath]);
    return (
        <div>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedKeys !== undefined ? selectedKeys : [defaultSelectedKey]}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
        </div>
    )
}
export default MyHeader;