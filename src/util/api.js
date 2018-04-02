const api = 'http://localhost:3001'

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': token
}

// export const fetchPosts = () => {
//     fetch(`${api}/posts`, { method: 'GET', headers })
//         .then(res =>res.json())
//         .then((data) => {
//             console.log('data',data);
//             return data
//         })
// }

export const fetchPostsByCategory = (category) =>
fetch(`${api}/${category}/posts`, { method: 'GET', headers})
    .then(res => res.json())


export const fetchAllCategories = () =>
fetch(`${api}/categories`, {method: 'GET',  headers})
    .then(res => res.json())
    .then(data => data.categories)

export const fetchAllPosts = () =>
fetch(`${api}/posts`, { method: 'GET',headers})
    .then(res => res.json())

export const fetchComments = (id) => {
  fetch(`${api}/posts/${id}/comments`, { method: 'GET',  headers})
     .then(res => res.json())
     .then(data => data)
}


export const newPost = (newPost) => {
    fetch(`${api}/posts`,{ method: 'POST', body: JSON.stringify(newPost), headers}
    ).then(res => {
        res.json(), console.log('res', res)
    })
     .then((data) => {dispatch(addPost(newPost))
        }
    )
}




// export const fetchAllPosts = () => {
//     fetch(`${api}/posts`, { method: 'GET', headers })
//         .then(res => res.json())
//         .then(data => console.log('data return is',data));
// }
//
// export const fetchComments = (id) => {
//     fetch(`${api}/posts/${id}/comments`, { method: 'GET', headers})
//         .then(res => res.json())
//         .then(data => data)
// }
// export const newPost = (post) => {
//     fetch(`${api}/posts`, {
//         method: 'POST',
//         headers:{
//             ...headers,
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({...post})
//     })
//     .then(res => res.json())
// };
