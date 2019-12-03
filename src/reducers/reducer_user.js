import _ from 'lodash'

export default (state={}, action) => {
    switch(action.type){
        case "CREATE_USER":
            return {...state, [action.payload.id] : action.payload}
        case "GET_USERS":
            debugger
            const val = _.mapKeys(action.payload, 'id')
            return { ...state,  ...val } //this way you dont create sub property that seem in component like "this.props.users.users"
        default:
            return state;
    }
}