export const registerNewUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST": return {
            ...state,
            loading: true,
        }

        case "USER_REGISTER_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }

        case "USER_REGISTER_FAILED": return {
            ...state,
            loading: true,
            error: "invalid"
        }
    }
    return state;

}


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST": return {
            ...state,
            loading: true,
        }

        case "USER_LOGIN_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }

        case "USER_LOGIN_FAILED": return {
            ...state,
            loading: false,
            error: "invalid"
        }
        case "USER_LOGOUT": return {
            ...state,
        }
    }
    return state;

}


export const getAllusersReducer = (state = {users:[]}, action) => {
    console.log(action);
    switch (action.type) {
        case "GET_ALLUSERS_REQUEST": return {
            ...state,
            loading: true,
        }

        case "GET_ALLUSERS_SUCCESS": return {
            ...state,
            loading: false,
            users: action.payload,
        }

        case "GET_ALLUSERS_FAILED": return {
            ...state,
            loading: true,
            error: action.payload,
        }
    }
    return state;

}



export const deleteUserReducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case "DELETE_USER_REQUEST": return {
            ...state,
            loading: true,
        }

        case "DELETE_USER_SUCCESS": return {
            ...state,
            loading: false,
            success:true
        }

        case "DELETE_USER_FAILED": return {
            ...state,
            loading: true,
            error: action.payload,
        }
    }
    return state;

}