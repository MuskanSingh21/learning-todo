import { instance } from "@/configuration/Axios"

//--------get users services (API)------------
export const getUsers = async() => {
    const res = await instance.get("/user")
    return res.data;
}

//-------create users services(API)-----------
export const createUsers = async(data) => {
    const res = await instance.post("/user",data)
    return res.data;
};

//-------update users services(API)----------
export const updateUsers = async(id,data) => {
    const res = await instance.put(`/user/${id}`,data)
    return res.data;
};

//-------delete users services(API)----------
export const deleteUsers = async(id) => {
    const res = await instance.delete(`/user/${id}`)
    return res.data;
};