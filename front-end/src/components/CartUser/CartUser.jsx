import styles from './CartUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
const cx = classNames.bind(styles);

function CartUser(props) {
    return (
        <>
            <Hello
                src={require('../../image/System/cart.png')}
                valueText={'Kiểm tra thông tin đơn hàng của bạn tại đây'}
            />
        </>
    );
}

export default CartUser;
