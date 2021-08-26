import { call, put, take, takeLatest } from "redux-saga/effects";
import { GET_CONTACT, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";
import {
    getContactSuccess,
    getContactFailed,
    addContactSuccess,
    addContactFailed,
    updateContactSuccess,
    updateContactFailed,
    deleteContactSuccess,
    deleteContactFailed,
} from "./actions";
import { _contact } from '../../constants/endpoint';
import { get, post, puts, del } from '../api';
import * as navigation from '../../navigations/RootNavigation';

function* getContact() {
    try {
        const response = yield call(get, _contact)
        const data = response.data.sort((a, b) => {
            if (a.firstName < b.firstName) {
                return -1
            }
            if (a.firstName > b.firstName) {
                return 1
            }
            return 0
        })
        yield put(getContactSuccess(data))

    } catch (error) {
        yield put(getContactFailed(error))
    }
}
function* addContact({ payload: { body } }) {
    try {
        const response = yield call(post, _contact, body)
        yield put(addContactSuccess(response))
        yield put({ type: GET_CONTACT })
        navigation.goBack()

    } catch (error) {
        yield put(addContactFailed(error))
    }
}
function* updateContact({ payload: { body } }) {
    try {
        const id = body.id
        delete body.id
        const response = yield call(puts, `${_contact}/${id}`, body)
        yield put(updateContactSuccess(response))
        yield put({ type: GET_CONTACT })
        navigation.goBack()
    } catch (error) {
        yield put(updateContactFailed(error))
    }
}
function* deleteContact({ payload: { id } }) {
    try {
        const response = yield call(del, `${_contact}/${id}`)
        yield put(deleteContactSuccess(response))
        yield put({ type: GET_CONTACT })
    } catch (error) {
        yield put(deleteContactFailed(error))
    }
}

function* contactSaga() {
    yield takeLatest(GET_CONTACT, getContact)
    yield takeLatest(ADD_CONTACT, addContact)
    yield takeLatest(UPDATE_CONTACT, updateContact)
    yield takeLatest(DELETE_CONTACT, deleteContact)
}

export default contactSaga;
