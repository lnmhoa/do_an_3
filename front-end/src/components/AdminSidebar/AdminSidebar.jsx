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

export const menu = [
    {
        id: 1,
        title: 'main',
        listItems: [
            {
                id: 1,
                title: 'Homepage',
                url: '/',
                icon: 'home.svg',
            },
            {
                id: 2,
                title: 'Profile',
                url: '/users/1',
                icon: 'user.svg',
            },
        ],
    },
    {
        id: 2,
        title: 'lists',
        listItems: [
            {
                id: 1,
                title: 'Users',
                url: '/users',
                icon: 'user.svg',
            },
            {
                id: 2,
                title: 'Products',
                url: '/products',
                icon: 'product.svg',
            },
            {
                id: 3,
                title: 'Orders',
                url: '/orders',
                icon: 'order.svg',
            },
            {
                id: 4,
                title: 'Posts',
                url: '/posts',
                icon: 'post2.svg',
            },
        ],
    },
    {
        id: 3,
        title: 'general',
        listItems: [
            {
                id: 1,
                title: 'Elements',
                url: '/',
                icon: 'element.svg',
            },
            {
                id: 2,
                title: 'Notes',
                url: '/',
                icon: 'note.svg',
            },
            {
                id: 3,
                title: 'Forms',
                url: '/',
                icon: 'form.svg',
            },
            {
                id: 4,
                title: 'Calendar',
                url: '/',
                icon: 'calendar.svg',
            },
        ],
    },
    {
        id: 4,
        title: 'Maintenance',
        listItems: [
            {
                id: 1,
                title: 'Settings',
                url: '/',
                icon: 'setting.svg',
            },
            {
                id: 2,
                title: 'Backups',
                url: '/',
                icon: 'backup.svg',
            },
        ],
    },
    {
        id: 5,
        title: 'analytics',
        listItems: [
            {
                id: 1,
                title: 'Charts',
                url: '/',
                icon: 'chart.svg',
            },
            {
                id: 2,
                title: 'Logs',
                url: '/',
                icon: 'log.svg',
            },
        ],
    },
];

const menuItems = [
    { path: '/admin/favorite-product', text: 'khách hàng', icon: 'user.svg' },
    { path: '/', text: 'Trang chủ', icon: 'home.svg' },
    { path: '/admin/favorite-product', text: 'Thương hiệu', icon: 'element.svg' },
    { path: '/admin/favorite-product', text: 'Danh mục', icon: 'log.svg' },
    { path: '/admin/info-user', text: 'sản phầm', icon: 'product.svg' },
    { path: '/admin/order', text: 'đơn hàng', icon: 'order.svg' },
    { path: '/admin/evaluate', text: 'Thống kê', icon: 'chart.svg' },
];

function AdminSidebar(props) {
    const [active, setActive] = useState(window.location.pathname);

    const handleActive = (text) => {
        setActive(text);
    };

    return (
        <div className={cx('container')}>
            <Link to="/admin">Quản trị viên</Link>
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
                                <img src={item.icon} alt="" />
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
