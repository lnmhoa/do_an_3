import {
    BsSmartwatch,
    BsPhone,
    BsLaptop,
    BsTablet,
    BsBadge4K,
    BsUsbPlug,
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
        path: '/dienthoai',
    },
    {
        name: 'Tablet',
        icon: BsTablet,
        path: '/tablet',
    },
    {
        name: 'Đồng Hồ',
        icon: BsSmartwatch,
        path: '/dongho',
    },
    {
        name: 'Màn hình',
        icon: BsBadge4K,
        path: '/manhinh',
    },
    {
        name: 'Laptop',
        icon: BsLaptop,
        path: '/laptop',
    },
    {
        name: 'Phụ kiện',
        icon: BsUsbPlug,
        path: '/phukien',
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
