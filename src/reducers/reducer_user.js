export default (state=[], action) => {
    switch(action.type){
        case "CREATE_USER":
            return [...state, action.payload]
        case "GET_USERS":
            debugger
            return [...state, action.payload]
        default:
            return state;
    }
}