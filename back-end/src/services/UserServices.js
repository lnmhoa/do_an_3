import User from '../models/UserModel'
import bcrypt from 'bcrypt'
import { generalAccessToken, generalRefreshToken } from './JwtService'
import jwt from 'jsonwebtoken'

const createUser = (userInfo) => {
    return new Promise(async (resolve, reject) => {
        const { phoneNumber, email, password } = userInfo;
        try {
            const checkAccount = await User.findOne({ $or: [{ phoneNumber: phoneNumber }, { email: email }] });
            if (checkAccount !== null) {
                resolve({
                    status: 'OK',
                    message: 'Email hoặc số điện thoại đã đã được dùng để đăng ký tài khoản.',
                });
            }
            const hash = bcrypt.hashSync(password, 10);
            const createdUser = await User.create({
                phoneNumber,
                email,
                password: hash,
            });
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const loginUser = (loginInfo) => {
    return new Promise(async (resolve, reject) => {
        const { phoneNumber, password } = loginInfo;
        try {
            const checkUser = await User.findOne({
                phoneNumber: phoneNumber,
            });

            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại',
                });
            }

            const comparePassword = bcrypt.compareSync(password, checkUser.password);
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'Mật khẩu hoặc tên đăng nhập không đúng.',
                });
            }

            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            const refresh_token = await generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(id);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại',
                });
            }
            const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateUser,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(id);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại',
                });
            }
            await User.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find();
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allUser,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(id);
            if (user === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại',
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user,
            });
        } catch (e) {
            reject(e);
        }
    });
};

export default {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailUser,
};
