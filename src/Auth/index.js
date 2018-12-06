/* eslint no-restricted-globals: 0*/
import auth0 from "auth0-js";
import jwtDecode from 'jwt-decode'

const LOGIN_SUCCESS_PAGE = "/secret"
const LOGIN_FAILURE_PAGE = "/"


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "scheduler-3.auth0.com",
        clientID: "u9KOK9WmpJPC3ABdHqtQ-gTvwG04f4bs",
        redirectUri: "http://thescheduler.netlify.com/callback",
        redirectUri: 'https://thescheduler.netlify.com',
        audience: "https://scheduler-3.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })
    constructor() {
        this.login = this.login.bind(this);
    }
    login() {
        this.auth0.authorize()
    }

    handleAuth() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime())
                localStorage.setItem("access token", authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken)
                localStorage.setItem("expires_at", expiresAt)
                location.hash = ""
                location.pathname = LOGIN_SUCCESS_PAGE
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE
            }
        })
    }
    isAuth() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        return new Date().getTime() < expiresAt
    }

    logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at');
        location.pathname = LOGIN_FAILURE_PAGE 
    }

    getProfile() {
        if (localStorage.getItem('id_token')) {
            return jwtDecode(localStorage.getItem('id_token'))
        } else {
            return {}
        }
    }
}