import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import BoxProduct from '../BoxProduct/BoxProduct';
import TopicProduct from '../TopicProduct/TopicProduct';

const cx = classNames.bind(styles);

function Product({ data, countItem, nameTopic, seeAll = true }) {
    const ProductItemList = [];

    for (let index = 0; index < countItem; index++) {
        ProductItemList.push(
            <BoxProduct
                name={data[index].name}
                price={data[index].price}
                rate={data[index].rate}
                sold={data[index].sold}
                key={index}
            />,
        );
    }
    return (
        <>
            <TopicProduct topicName={nameTopic} seeAll={seeAll}/>
            <div className={cx('container')}>{ProductItemList}</div>
        </>
    );
}

export default Product;
