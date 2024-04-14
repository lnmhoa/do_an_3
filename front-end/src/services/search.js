import request from '../utils/httpRequest';

const search = async (id, type = 'less') => {
    try {
        const res = await request.get(`product/get-details`, {
            params: {
                id: id,
                type,
            },
        });
        return res.data;
    } catch {}
};

export default search;
