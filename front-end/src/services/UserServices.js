import axios from 'axios';

export const axiosJWT = axios.create();

export const addProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create`, data);
    return res.data;
};

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
    return res.data;
};

export const signupUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
    return res.data;
};

export const getInfoUser = async (id = '', access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details-user/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        },
    });
    return res.data;
};

export const getAllProduct = async (data) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`, data);
    return res.data;
};

export const getAllBrand = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/brand/get-all`, {});
    return res.data;
};

export const getAllType = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/type/get-all`, {});
    return res.data;
};

export const refreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
        withCredentials: true,
    });
    return res.data;
};

export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`);
    return res.data;
};

export const getAllUsers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/get-all`);
    return res.data;
};

export const getDetailProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-detail/${id}`);
    return res.data;
};
