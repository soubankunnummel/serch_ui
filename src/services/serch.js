import { Axios } from "../config/axios"



export const Search = async (keywords) => {
    try {
        const res = await Axios.get(`/product${keywords}`) 
        return res
    } catch (error) {
        return error
    }
}