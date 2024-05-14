import styles from './InfoUserAdmin.module.scss';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/UserServices';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import { FaPenToSquare } from 'react-icons/fa6';

const cx = className.bind(styles);

function InfoUserAdmin(props) {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const access_token = 'access_token'; 
                const users = await getAllUsers(access_token);
                setDataUser(users.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={cx('container')}>
            <AdminSidebar />
            <div className={cx('sub-container', 'content')}>
                <div className={cx('table-title')}>Danh sách khách hàng</div>

                <table className={cx('table-upload')}>
                    <thead>
                        <tr>
                            <th style={{ width: '2%' }}>#</th>
                            <th style={{ width: '15%' }}>Họ & tên</th>
                            <th style={{ width: '10%' }}>Ngày sinh</th>
                            <th style={{ width: '10%' }}>Giới tính</th>
                            <th style={{ width: '25%' }}>Địa chỉ</th>
                            <th style={{ width: '10%' }}>Số điện thoại</th>
                            <th style={{ width: '25%' }}>Email</th>
                            <th style={{ width: '3%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataUser.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fullName}</td>
                                <td>{user.dateOfBirth?.slice(0, 10).split('-').reverse().join('-')}</td>
                                <td>{user.gender}</td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>
                                        <FaPenToSquare />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InfoUserAdmin;
