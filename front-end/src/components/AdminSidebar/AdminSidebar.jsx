import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import { useState } from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { FaMobile } from 'react-icons/fa6';
import { MdBrandingWatermark } from 'react-icons/md';
import { FaUser, FaBox, FaRegArrowAltCircleLeft, FaHome, FaChartLine, FaList } from 'react-icons/fa';

const cx = className.bind(styles);

const menuItems = [
    { path: '/admin/', text: 'Admin', icon: <GrUserAdmin /> },
    { path: '/', text: 'Trang chủ', icon: <FaHome /> },
    { path: '/admin/favorite-product', text: 'Thương hiệu', icon: <MdBrandingWatermark /> },
    { path: '/admin/favorite-product', text: 'Danh mục', icon: <FaList /> },
    { path: '/admin/info-user', text: 'khách hàng', icon: <FaUser /> },
    { path: '/admin/order', text: 'đơn hàng', icon: <FaBox /> },
    { path: '/admin/evaluate', text: 'Thống kê', icon: <FaChartLine /> },
];

function AdminSidebar(props) {
    const [active, setActive] = useState(window.location.pathname);
    const handleActive = (text) => {
        setActive(text);
    };

    return (
        <div className={cx('container')}>
            <Link to="">Quản trị viên</Link>
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                handleActive(item.text);
                            }}
                        >
                            <Link to={item.path} className={cx({ active: item.path === active })}>
                                {item.icon}
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link>
                            <FaRegArrowAltCircleLeft className={cx('icon')} /> Đăng xuất
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminSidebar;
