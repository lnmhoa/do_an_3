import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Slider from '../../components/Slider/Slider';

const cx = classNames.bind(styles);

const SliderHome = Slider.SliderHome;
const SliderSale = Slider.SliderSale;

function HomePage() {
    return (
        <>
            <>
                <SliderHome />
            </>
            <>
                <SliderSale />
            </>
        </>
    );
}

export default HomePage;
