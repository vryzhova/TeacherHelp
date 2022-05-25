const _URL = "http://127.0.0.1:8000";

export const FetchReq = async (url, token = null, method = "GET", ownHeader = null) => {
    let requestOptions = undefined;
    if (ownHeader) requestOptions = ownHeader;
    else {
        requestOptions = {
        method: method,
        headers: { "Content-Type": "application/json","Accept" : "application/json", Authorization: token ,"X-CSRFToken": "rR1HL56Zs1x6JdAZihsJ8OqLMkP5Bg6scmSbnhFXR0XNJbz9eBmnk23Z9d6rhwI5"},
        };
    }
    return await fetch(_URL + url, requestOptions);
    };

    export const sendLogin = async (username, password) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password }),
        };
        return await fetch(_URL + "/Users/Authenticate", requestOptions).then((response) =>
            response.json(),
        );
    };

    export const getSubjects = async (token) => {
        return FetchReq("/subjects/", token).then((res) => res.json());
    };

    export const getCapters = async (token) => {
        return FetchReq("/chapters/", token).then((res) => res.json());
    };

    export const getTheme = async (token) => {
        return FetchReq("/themes/", token).then((res) => res.json());
    };