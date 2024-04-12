import {
    BsWatch,
    BsPhone,
    BsLaptop,
    BsTablet,
    BsTv,
    BsUsbPlugFill,
    BsNewspaper,
    BsFillLightningFill,
} from 'react-icons/bs';
import styles from './HeaderBottom.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const headerBottomItems = [
    {
        name: 'Điện Thoại',
        icon: BsPhone,
        path: '/list-phone',
    },
    {
        name: 'Tablet',
        icon: BsTablet,
        path: '/list-tablet',
    },
    {
        name: 'Đồng Hồ',
        icon: BsWatch,
        path: '/list-watch',
    },
    {
        name: 'Màn hình',
        icon: BsTv,
        path: '/list-sreen',
    },
    {
        name: 'Laptop',
        icon: BsLaptop,
        path: '/laptop',
    },
    {
        name: 'Phụ kiện',
        icon: BsUsbPlugFill,
        path: '/list-accessory',
    },
    {
        name: 'Tin hot',
        icon: BsNewspaper,
        path: '/tinhot',
    },
    {
        name: 'Ưu đãi',
        icon: BsFillLightningFill,
        path: '/uudai',
    },
];

const HeaderBottom = () => {
    return (
        <div className={cx('container')}>
            {headerBottomItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <Link to={item.path} key={index}>
                        <div className={cx('hover-to-yellow', 'item')}>
                            <IconComponent />
                            <span>{item.name}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default HeaderBottom;
