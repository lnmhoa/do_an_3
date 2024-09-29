import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        type: 'home',
        isDefault: false,
        provinceAddress: 'Hồ Chí Minh',
        districtAddress: 'Gò Vấp',
        wardAddress: 'Quận 1',
        provinceId: 79,
        districtId: 764,
        wardId: 26882,
        detailAddress: 'Đường Nguyễn Huệ, Phường Bến Nghé',
        receiver: 'Lê Nguyễn Minh Hòa',
        numberPhone: '0397364664',
    },
    {
        id: 2,
        type: 'home',
        isDefault: false,
        provinceAddress: 'Hồ Chí Minh',
        districtAddress: 'Gò Vấp',
        wardAddress: 'Quận 1',
        provinceId: 79,
        districtId: 764,
        wardId: 26882,
        detailAddress: 'Đường Nguyễn Huệ, Phường Bến Nghé',
        receiver: 'Lê Nguyễn Minh Hòa',
        numberPhone: '0397364664',
    },
];

export const addressSlide = createSlice({
    name: 'address',
    initialState,
    reducers: {
        updateAddress: (state, action) => {
            const {
                addressId,
                selectedProvinceId,
                selectedDistrictId,
                selectedWardId,
                provinceAddress,
                districtAddress,
                wardAddress,
                receiver,
                numberPhone,
                selectedType,
                isDefault,
                detailsAddress,
            } = action.payload;

            const existingAddressIndex = state.findIndex((address) => address.id === addressId);

            if (existingAddressIndex !== -1) {
                // Cập nhật existingAddress
                const updatedAddress = {
                    ...state[existingAddressIndex], // Giữ lại các thuộc tính cũ
                    selectedProvinceId,
                    selectedDistrictId,
                    selectedWardId,
                    provinceAddress,
                    districtAddress,
                    wardAddress,
                    receiver,
                    numberPhone,
                    selectedType,
                    isDefault,
                    detailsAddress,
                };

                // Cập nhật state
                return [
                    ...state.slice(0, existingAddressIndex), // Các phần tử trước existingAddress
                    updatedAddress, // Phần tử đã được cập nhật
                    ...state.slice(existingAddressIndex + 1), // Các phần tử sau existingAddress
                ];
            }

            return state;
        },
    },
});

export const { updateAddress } = addressSlide.actions;
export default addressSlide.reducer;
