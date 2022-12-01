import axios from 'axios';


export const tokenRefresh = async () => {
    const uri = import.meta.env.VITE_AGRO_API;
    const config = {
        //url: `${uri}auth/refresh`,	
        url: `auth/refresh`,
        method: 'GET',
        Credential: 'include',
        withCredentials: true,
    }
    try {
        const response = await axios(config);
        return response.data.token;
    }
    catch (error) {
        return false;
    }
};
