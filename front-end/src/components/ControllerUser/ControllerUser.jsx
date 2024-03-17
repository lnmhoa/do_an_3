import styles from './ControllerUser.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ControllerUser(props) {
    return (
        <div className={cx('hello-div')}>
            <div className={cx('text')}>
                <div>trang điều hướng người dùng</div>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default ControllerUser;
