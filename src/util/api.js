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

export const fetchAllCategories = () =>
    fetch(`${api}/categories`, {method: 'GET',  headers})
        .then(res => res.json())
        .then(data => data.categories)

export const fetchPosts = () =>
    fetch(`${api}/posts`, { method: 'GET',headers})
        .then(res => res.json())
        .then(data => data)

export const fetchPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { method: 'GET', headers})
        .then(res => res.json())
        .then(data => data)

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, { method: 'POST', body: JSON.stringify({option}),headers})
        .then(res => res.json())


export const editPost = (id, post) =>
    fetch(`${api}/posts/${id}`, { method: 'PUT',body: JSON.stringify(post), headers})
        .then(res => res.json())
        .then(data => data)

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, { method: 'DELETE', headers})
        .then(res => res.json())
        .then(data => data)


export const newPost = (newPost) =>
    fetch(`${api}/posts`,{
        method: 'POST',
        body:JSON.stringify(newPost),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers
        })
        .then(res => res.json())
        //.then(data => data)
        .then((data) => {
                    console.log('data',data);
                    return data
                })
        //.then(res => {res.json(), console.log('res', res)})

export const fetchOnePost = (id) =>
	 fetch(`${api}/posts/${id}`, { method: 'GET', headers})
      .then(res => res.json())
      //.then(data => data.comments)

// comments

export const fetchComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { method: 'GET',  headers})
      .then(res => res.json())
      .then(data => data)


export const addComment = (newcomment) =>
  fetch(`${api}/comments`, { method: 'POST', body: JSON.stringify(newcomment), headers})
     .then(res => res.json())


export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { method: 'GET',  headers})
     .then(res => res.json())
     .then(data => data)


export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, { method: 'POST', body: JSON.stringify({option}),  headers})
     .then(res => res.json())



export const editComment = (id) => {
  fetch(`${api}/comments/${id}`, { method: 'POST',  headers})
     .then(res => res.json())
     .then(data => data)

}

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, { method: 'DELETE',  headers})
     .then(res => res.json())
