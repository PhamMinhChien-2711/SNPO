import apiBase from "."

const userApi = {}

userApi.login = (payload) => {
    return apiBase.post(`${process.env.REACT_APP_BASE_API}/user/login`, payload)
}

userApi.register = (user) => {

}

export default userApi