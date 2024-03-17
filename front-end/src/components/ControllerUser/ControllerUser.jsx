import styles from './ControllerUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';

const cx = classNames.bind(styles);

function ControllerUser() {
    return (
        <>
            <Hello
                src={require('../../image/System/control.png')}
                valueText={'Tổng quát các hoạt động của bạn tại đây'}
            />
        </>
    );
}

export default ControllerUser;
