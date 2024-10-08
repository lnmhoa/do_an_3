import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import tokens from './JwtServices.js'
import jwt from 'jsonwebtoken'

const createUser = (userInfo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAccount = await User.findOne({ $or: [{ phoneNumber: userInfo.phoneNumber }, { email: userInfo.email }] });
            if (checkAccount !== null) {
                resolve({
                    status: 'OK',
                    message: 'Email hoặc số điện thoại đã đã được dùng để đăng ký tài khoản!',
                });
                return;
            }        
            const hash = bcrypt.hashSync(userInfo.password, 10);
            const createdUser = await User.create({
                phoneNumber,
                email,
                password: hash,
            });
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'Đăng kí thành công',
                });
            }
        } catch (error) {
           reject(error)
        }
    });
};

const loginUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                phoneNumber: data.phoneNumber,
            });

            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }

            const comparePassword = bcrypt.compareSync(data.password, checkUser.password);
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'Mật khẩu hoặc tên đăng nhập không đúng!',
                    
                });
                return;
            }

            const access_token = await tokens.generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            const refresh_token = await tokens.generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin,
            });

            resolve({
                status: 'OK',
                message: 'Đăng nhập thành công',
                access_token,
                refresh_token,
            });
        } catch (error) {
            reject(error)
        }
    });
};

const updateUser = (idUser, userInfo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }
            const updateUser = await User.findByIdAndUpdate(idUser, userInfo, { new: true });
            resolve({
                status: 'OK',
                message: 'Cập nhật tài khoản thành công',
                data: updateUser,
            });
        } catch (error) {
            reject(error)
        }
    });
};

const deleteUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(idUser);
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }
            await User.findByIdAndDelete(idUser);
            resolve({
                status: 'OK',
                message: 'Xóa tài khoản thành công',
            });
        } catch (error) {
            reject(error)
        }
    });
};

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find();
            resolve({
                status: 'OK',
                message: 'Thành công',
                data: allUser,
            });
        } catch (error) {
            reject(error)
        }
    });
};

const getDetailUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(idUser);
            if (user === null) {
                resolve({
                    status: 'OK',
                    message: 'Tài khoản không tồn tại!',
                });
                return;
            }

            resolve({
                status: 'OK',
                message: 'Thành công',
                data: user,
            });
        } catch (error) {
            reject(error)
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
