import styles from './AdminPage.module.scss';
import className from 'classnames/bind';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';

const cx = className.bind(styles);

function AdminPage(props) {
    return (
        <div className={cx('container')}>
            <AdminSidebar />
        </div>
    );
}

export default AdminPage;
