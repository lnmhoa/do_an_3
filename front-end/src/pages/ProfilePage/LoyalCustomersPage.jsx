import React, { useEffect, useState } from 'react';
import axios from 'axios';

const host = 'https://provinces.open-api.vn/api/';

const LoyalCustomersPage = () => {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            const response = await axios.get(`${host}?depth=1`);
            setCities(response.data);
        };
        fetchCities();
    }, []);

    const handleCityChange = async (e) => {
        const cityId = e.target.selectedOptions[0].dataset.id;
        setSelectedCity(cityId);
        const response = await axios.get(`${host}p/${cityId}?depth=2`);
        setDistricts(response.data.districts);
        setWards([]); // Reset wards when changing city
        setSelectedDistrict(''); // Reset selected district
    };

    const handleDistrictChange = async (e) => {
        const districtId = e.target.selectedOptions[0].dataset.id;
        setSelectedDistrict(districtId);
        const response = await axios.get(`${host}d/${districtId}?depth=2`);
        setWards(response.data.wards);
    };

    return (
        <div>
            <select id="city" onChange={handleCityChange}>
                <option disabled value="">
                    Chọn thành phố
                </option>
                {cities.map((city) => (
                    <option key={city.code} data-id={city.code} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>

            <select id="district" onChange={handleDistrictChange} disabled={!selectedCity}>
                <option disabled value="">
                    Chọn quận/huyện
                </option>
                {districts.map((district) => (
                    <option key={district.code} data-id={district.code} value={district.name}>
                        {district.name}
                    </option>
                ))}
            </select>

            <select id="ward" disabled={!selectedDistrict}>
                <option disabled value="">
                    Chọn phường/xã
                </option>
                {wards.map((ward) => (
                    <option key={ward.code} data-id={ward.code} value={ward.name}>
                        {ward.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LoyalCustomersPage;
