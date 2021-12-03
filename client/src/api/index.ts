import axios from "axios";

const instance = axios.create({
    baseURL: "http://10.244.10.12:8000/api/",
});
const getToken = () =>{
    return {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}
}
export const signInReq = (data) => instance.post("auth/sign-in", data);
export const signUpReq = (data) => instance.post("auth/sign-up", data);


export const getFilesReq = (dirId) => instance.get(`files${dirId ? '?parent=' + dirId : ''}`, getToken());
export const createFileReq = (data) => instance.post(`files`, data, getToken());
export const moveFileReq = (positions) => instance.post(`files/move`, positions, getToken());
