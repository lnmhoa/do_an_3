import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { FaHome } from 'react-icons/fa';

const cx = classNames.bind(styles);

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

const Breadcrumbs = ({ name }) => {
    const routes = [
        { path: '/', breadcrumb: 'Trang chủ' },
        {
            path: '/detail-product/:name',
            breadcrumb: CustomPropsBreadcrumb,
            props: { someProp: name },
        },
    ];
    const breadcrumbs = useBreadcrumbs(routes);
    return (
        <div className={cx('breadcrumbs')}>
            <div>
                <FaHome/>

                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                        {index < breadcrumbs.length - 1 && (
                            <span className={cx('span-breadcrumb')}>
                                /
                            </span>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumbs;
