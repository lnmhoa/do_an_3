const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { generalAccessToken, generalRefreshToken } = require('./JwtService');
const jwt = require('jsonwebtoken');

const createUser = (userInfo) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, phone } = userInfo;
        try {
            const checkEmail = await User.findOne({
                email: email,
            });
            if (checkEmail !== null) {
                resolve({
                    status: 'OK',
                    message: 'The email is already',
                });
            }
            const hash = bcrypt.hashSync(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone,
            });
            if (createdUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

const loginUser = (loginInfo) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, phone } = loginInfo;
        try {
            const checkUser = await User.findOne({
                email: email,
            });
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'The email is not defined',
                });
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password);
            if (!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'The password or user is incorrect',
                });
            }
            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });
            const refresh_token = await generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
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
                    message: 'The user is defined',
                });
            }
            const updateUser = await User.findByIdAndUpdate(id, data, {new : true}) 
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: updateUser
            })
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
                    message: 'The user is defined',
                });
            }
            await User.findByIdAndDelete(id) 
            resolve({
                status: "OK",
                message: "SUCCESS",
            })
        } catch (e) {
            reject(e);
        }
    });
};

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find() 
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: allUser
            })
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailUser= (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(id);
            if (user === null) {
                resolve({
                    status: 'OK',
                    message: 'The user is defined',
                });
            }
          
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: user
            })
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser, 
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailUser,
};
