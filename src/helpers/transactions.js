import { Request } from './validate';
import { tokenRefresh } from './tokenRefresh';

export const getTransactions = async () => {
    try {
        const restoken = await tokenRefresh();
        if (restoken) {
            const uri = import.meta.env.VITE_AGRO_API;
            const config = {
                method: 'GET',
                url: `${uri}transactions/get`,
                headers: {
                    authorization: `Bearer ${restoken}`
                }
            }
            const response = await Request(config);
            return response.data;
        }
    } catch (error) { }
};

export const addTransaction = async (value, type) => {
    try {
        const restoken = await tokenRefresh();
        if (restoken) {
            const uri = import.meta.env.VITE_AGRO_API;
            const data = {
                value,
                type
            }
            const config = {
                method: 'POST',
                url: `${uri}transactions/add`,
                headers: {
                    authorization: `Bearer ${restoken}`
                },
                data: data
            }
            const response = await Request(config);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
