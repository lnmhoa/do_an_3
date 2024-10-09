import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const generalAccessToken = async (payload) => {
    const access_token = jwt.sign(
        {
            ...payload,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '1h' },
    );

    return access_token;
};

const generalRefreshToken = async (payload) => {
    const refresh_token = jwt.sign(
        {
            ...payload,
        },
        process.env.REFRESH_TOKEN,
        { expiresIn: '365d' },
    );

    return refresh_token;
};

const refreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
            if (err) {
                resolve({
                    status: 'ERROR',
                    message: 'Bạn không có quyền để thực hiện chức năng này',
                });
            } else {
                try {
                    const access_token = await generalRefreshToken({
                        id: user?.id,
                        isAdmin: user?.isAdmin,
                    });
                    resolve({
                        status: 'OK',
                        message: 'Thành công',
                        access_token,
                    });
                } catch (error) {
                    reject(error);
                }
            }
        });
    });
};

export default {
    generalAccessToken,
    generalRefreshToken,
    refreshTokenJwtService,
};
