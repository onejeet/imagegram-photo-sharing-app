const initialState = {
    currentUser: {},
    users:[],
    posts:[],
    allComments:[],
    sorting:'timestamp',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            return Object.assign({}, state, {
                currentUser : action.payload.user
            });
        case 'SET_USERS':
            return Object.assign({}, state, {
                users : action.payload.users
            });
        case 'SET_POSTS':
            return Object.assign({}, state, {
                posts : action.payload.posts
            });
        case 'SET_ALLCOMMENTS':
            return Object.assign({}, state, {
                allComments : action.payload.allComments
            });
        case 'SET_SORTING':
            return Object.assign({}, state, {
                sorting : action.payload.sorting
            });
        default:
            return state;
    }
}
