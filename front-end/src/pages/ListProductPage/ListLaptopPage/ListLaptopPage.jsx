import { useEffect } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import classNames from 'classnames/bind';
import styles from './ListLaptopPage.module.scss';

const cx = classNames.bind(styles);

function ListLaptopPage({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
                <Breadcrumbs />
        </div>
    );
}

export default ListLaptopPage;
