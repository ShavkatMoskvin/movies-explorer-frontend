const token = localStorage.getItem('jwt')

class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }

    registerUser(data) {
        return fetch(`${this._address}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
        }).then(this._handleOriginalResponse)

    }

    loginUser(data) {
        return fetch(`${this._address}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then(this._handleOriginalResponse)

    }

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        }).then(this._handleOriginalResponse)
    }

    setUserInfo(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        }).then(this._handleOriginalResponse)
    }

    addMovie(data) {
        return fetch(`${this._address}/movies`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(this._handleOriginalResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._address}/movies/${id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
                "Content-type": "application/json",
            },
        }).then(this._handleOriginalResponse);
    }

    getMovies() {
        return fetch(`${this._address}/movies`, {
            method: "GET",
            headers: {
                authorization: this._token,
                "Content-type": "application/json",
            },
        }).then(this._handleOriginalResponse);
    }

    updateToken() {
        this._token = `Bearer ${localStorage.getItem('jwt')}`;
      }

    _handleOriginalResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }
}

const api = new Api({
    address: "http://api.moskvin.nomoredomains.xyz",
    token: `Bearer ${token}`,
});

export default api