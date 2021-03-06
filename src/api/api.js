import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3c81fd9e-287b-43e8-9969-1552db318957"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(/*'https://cors-anywhere.herokuapp.com/' + */`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {

        return instance.post(/*'https://cors-anywhere.herokuapp.com/' + */`follow/${userId}` )
    },
    unfollow(userId) {
        return instance.delete(/*'https://cors-anywhere.herokuapp.com/' + */`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId){
        return instance.get(/*'https://cors-anywhere.herokuapp.com/' + */ `profile/` + userId);
    },
    getStatus(userId){
        return instance.get(/*'https://cors-anywhere.herokuapp.com/' + */ `profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(/*'https://cors-anywhere.herokuapp.com/' + */ `profile/status`,{status:status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }

        })
    },
    saveProfile(profile){
        return instance.put(/*'https://cors-anywhere.herokuapp.com/' + */ `profile`, profile);

    }

}

export const authAPI = {
    me(){
return  instance.get(/*'https://cors-anywhere.herokuapp.com/' + */`auth/me`);
    },
    login(email,password,rememberMe=false, captcha=null){
return   instance.post(/*'https://cors-anywhere.herokuapp.com/' + */`auth/login`,{email,password,rememberMe,captcha});      
    },
    logout(){
        return   instance.delete(/*'https://cors-anywhere.herokuapp.com/' + */`auth/login`);     
            }
}

export const securityAPI = {
    getCaptchaUrl(){
        return  instance.get(`security/get-captcha-url`);
    }
}