import axios from 'axios';


export const tokenRefresh = async () => {
    const uri = import.meta.env.VITE_AGRO_API;
    const config = {
        url: `${uri}auth/refresh`,	
        method: 'GET',
        withCredentials: true,
    }
    try {
        const response = await fetch(config.url, {
            method: config.method,
            credentials: 'include',
        });
        const data = await response.json();
        return data.token;
    }
    catch (error) {
        return false;
    }
};
