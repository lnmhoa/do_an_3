import styles from './InfoUser.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InfoUser(props) {
    return (
        <div className={cx('hello-div')}>
            <div className={cx('text')}>
                <div>Trang hồ sơ người dùng</div>
            </div>
            <img src="" alt="" />
        </div>
    );
}

export default InfoUser;
