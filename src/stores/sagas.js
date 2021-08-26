import { all } from "redux-saga/effects";

import ContactSaga from "./contact/saga";

export default function* rootSaga() {
    yield all([
        ContactSaga()
    ])
}
