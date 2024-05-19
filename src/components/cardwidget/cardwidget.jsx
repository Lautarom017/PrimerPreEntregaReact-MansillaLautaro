import { Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    return (
        <Badge count={5}>
            <Button type="text" shape="circle" icon={<ShoppingCartOutlined />} />
        </Badge>
    );
};

export default CartWidget;