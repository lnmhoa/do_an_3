import * as request from "../utils/httpRequest";


const search = async (q, type = 'less') => {
    try{
        const res = await request.get(
            `users/search`,{
                params: {
                    q,
                 type,
                }
            }
        )
        return res.data;
    }catch{
    }
}

const create = async (q, type = 'less') => {
    try{
        const res = await request.get(
            `users/search`,{
                params: {
                    q,
                 type,
                }
            }
        )
        return res.data;
    }catch{
    }
}

export {search, create}