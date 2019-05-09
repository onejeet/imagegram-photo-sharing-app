

export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            return Object.assign({}, state, {
                currentUser : action.payload
            });
        case 'SET_USERS':
            return Object.assign({}, state, {
                users : action.payload
            });
        case 'SET_POSTS':
            return Object.assign({}, state, {
                posts : action.payload
            });
        case 'SET_ALLCOMMENTS':
            return Object.assign({}, state, {
                allComments : action.payload
            });
        case 'SET_SORTING':
            return Object.assign({}, state, {
                sorting : action.payload
            });
        default:
            return state;
    }
}
