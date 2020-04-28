import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c46e99c-cc61-49d3-b479-09c0057c7423"
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
    }

}

export const authAPI = {
    me(){
return  instance.get(/*'https://cors-anywhere.herokuapp.com/' + */`auth/me`)
    }
}