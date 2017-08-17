import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
    HELLO, helloAction,
    HELLO_API, helloApiAction,
    HELLO_API_SUCCESS, helloApiSuccessAction,
    HELLO_API_FAIL, helloApiFailAction
} from '../actions';
import { helloApi } from '../services/helloApi';

export function* getHelloApi(action) {
    console.log(helloApiSuccessAction());
    try {
        console.log(action);
        const data = yield call(helloApi, action.payload.id);
        yield put(helloApiSuccessAction(data.payload));
    } catch (error) {
        yield put(helloApiFailAction(error));
    }
}

// https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
export default function* rootSaga() {
    //yield* takeEvery(HELLO, helloAction);
    yield* takeEvery(HELLO_API, getHelloApi);
}
