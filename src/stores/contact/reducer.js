import {
    GET_CONTACT,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAILED,
    ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILED,
    UPDATE_CONTACT,
    UPDATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_FAILED,
    DELETE_CONTACT,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILED,
} from "./actionTypes";

const initialState = {
    data: [],
    loading: false
}

const contact = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT:
            state = {
                ...state,
                loading: true,
            }
            break
        case GET_CONTACT_SUCCESS:
            state = {
                ...state,
                data: action.payload,
                loading: false
            }
            break
        case GET_CONTACT_FAILED:
            state = {
                ...state,
                loading: false,
            }
            break
        case ADD_CONTACT:
            state = {
                ...state,
                loading: true,
            }
            break
        case ADD_CONTACT_SUCCESS:
            state = {
                ...state,
                // loading: false,
            }
            break
        case ADD_CONTACT_FAILED:
            state = {
                ...state,
                loading: false,
            }
            break
        case UPDATE_CONTACT:
            state = {
                ...state,
                loading: true,
            }
            break
        case UPDATE_CONTACT_SUCCESS:
            state = {
                ...state
            }
            break
        case UPDATE_CONTACT_FAILED:
            state = {
                ...state,
                loading: false,
            }
            break
        case DELETE_CONTACT:
            state = {
                ...state,
                loading: true,
            }
            break
        case DELETE_CONTACT_SUCCESS:
            state = {
                ...state
            }
            break
        case DELETE_CONTACT_FAILED:
            state = {
                ...state,
                loading: false,
            }
            break
    }
    return state

}

export default contact;
