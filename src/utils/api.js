const api = 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
};


// export const fetchCategories = () =>
//   fetch(url, { headers })
//   .then((res) => {
// 	return res.json()
// })
// .then((data) => {
//    console.log('data', data);
//    return data.categories
// });

// export const fetchCategories = () => {
//     fetch(`${api}/categories`, { method: 'GET', headers  })
//         .then(res =>res.json())
//         .then(data => data)
// }

export const fetchAllPosts = () => {
    fetch(`${api}/posts`, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => console.log('data return is',data));
}

export const fetchComments = (id) => {
    fetch(`${api}/posts/${id}/comments`, { method: 'GET', headers})
        .then(response => response.json())
        .then(data => data)
}

// const postBody = JSON.stringify({
//          	  	'author': this.state.author,
//          	  	'title': this.state.title,
//          	  	'body': this.state.post,
//          	  	'id': uuid.v4(),
//          	  	'category': 'react',
//          	  	'timestamp': Date.now()
// });
//
// export const newPost = post => dispatch => {
//   return fetch(`${api}/posts`, post, {
//     method: 'POST',
//     headers,
//     post: `${postBody}`
//   })
//     .then(response => response.json())
//     .then(post => dispatch(loadPosts(post)));
// };
