export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENTUSER',
        payload: user
    }
}

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const setallComments = (comments) => {
    return {
        type: 'SET_ALLCOMMENTS',
        payload: comments
    }
}

export const setSorting = (sorting) => {
    return {
        type: 'SET_SORTING',
        payload: sorting
    }
}
