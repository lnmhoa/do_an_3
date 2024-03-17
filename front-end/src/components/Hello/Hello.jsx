import styles from './Hello.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function Hello({src, valueText}) {
    return (
        <div className={cx('hello-div')}>
            <div>Chào mừng bạn quay trở lại, 'Tên Người Dùng'</div>
            <div>{valueText}</div>
            <img src={src} alt="logo website" />
        </div>
    );
}

export default Hello;
