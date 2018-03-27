const api = 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
};

export const getCategories = () => {
    fetch(`${api}/categories`, { method: 'GET', headers  })
        .then(res =>res.json())
        .then(data => data)
}
export const getAll = () =>
    fetch(`${api}/posts`, { method: 'GET', headers })
        .then(res => res.json())
        .then(data => console.log('data return is',data));

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, { method: 'GET', headers})
        .then(res => res.json())
        .then(data => data)
