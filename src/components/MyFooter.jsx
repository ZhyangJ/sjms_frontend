
import { Layout } from 'antd';
const { Footer } = Layout;
const MyFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            肾机妙算 ©{new Date().getFullYear()} Created by IDC
        </Footer>
    )
}
export default MyFooter