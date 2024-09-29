import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    fullName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    avatar: '',
    address: '',
    createAt: '',
    access_token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { fullName, email, gender, phoneNumber, dateOfBirth, avatar, address, createdAt, access_token } =
                action.payload;
            const date = new Date(createdAt);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const dayJoin = `${day}-${month}-${year}`;
            state.fullName = fullName || phoneNumber;
            state.email = email;
            state.gender = gender;
            state.phoneNumber = phoneNumber;
            state.dateOfBirth = dateOfBirth;
            state.avatar = avatar;
            state.address = address;
            state.dayJoin = dayJoin;
            state.access_token = access_token;
        },
        resetUser: (state) => {
            state.fullName = '';
            state.email = '';
            state.gender = '';
            state.phoneNumber = '';
            state.dateOfBirth = '';
            state.avatar = '';
            state.address = '';
            state.dayJoin = '';
            state.access_token = '';
        },
    },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
