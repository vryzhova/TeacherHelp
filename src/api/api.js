const _URL = "http://194.58.107.109:5000";

export const FetchReq = async (url, token = null, method = "GET", ownHeader = null) => {
    let requestOptions = undefined;
    if (ownHeader) requestOptions = ownHeader;
    else {
        requestOptions = {
        method: method,
        headers: { "Content-Type": "application/json", Authorization: token },
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
