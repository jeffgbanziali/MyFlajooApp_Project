import ApiServer from "./ApiServer";

export const user_login = async data => {
    try {

        const result = await ApiServer("/user/login", data, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,

        });
        return result;
    } catch (error) {
        return error.response.data;
    }

};