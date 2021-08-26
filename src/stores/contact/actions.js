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

export const getContact = () => {
    return {
        type: GET_CONTACT,
    }
}
export const getContactSuccess = (data) => {
    return {
        type: GET_CONTACT_SUCCESS,
        payload: data
    }
}
export const getContactFailed = error => {
    return {
        type: GET_CONTACT_FAILED,
        payload: error
    }
}
export const addContact = ({ body }) => {
    return {
        type: ADD_CONTACT,
        payload: { body }
    }
}
export const addContactSuccess = () => {
    return {
        type: ADD_CONTACT_SUCCESS,
    }
}
export const addContactFailed = error => {
    return {
        type: ADD_CONTACT_FAILED,
        payload: error
    }
}
export const updateContact = ({ body }) => {
    return {
        type: UPDATE_CONTACT,
        payload: { body }
    }
}
export const updateContactSuccess = () => {
    return {
        type: UPDATE_CONTACT_SUCCESS,
    }
}
export const updateContactFailed = error => {
    return {
        type: UPDATE_CONTACT_FAILED,
        payload: error
    }
}
export const deleteContact = ({ id }) => {
    return {
        type: DELETE_CONTACT,
        payload: { id }
    }
}
export const deleteContactSuccess = () => {
    return {
        type: DELETE_CONTACT_SUCCESS,
    }
}
export const deleteContactFailed = error => {
    return {
        type: DELETE_CONTACT_FAILED,
        payload: error
    }
}