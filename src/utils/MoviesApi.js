class Api {
    constructor({ address }) {
        this._address = address;
    }

    getMovies() {
        return fetch(`${this._address}/beatfilm-movies`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleOriginalResponse);
    }

    _handleOriginalResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`ошибка:${res.status}`);
    }
}

const moviesApi = new Api({
    address: "https://api.nomoreparties.co",
});

export default moviesApi