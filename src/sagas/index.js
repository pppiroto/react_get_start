import { takeEvery } from 'redux-saga';
import {
    HELLO, helloAction
} from '../actions';

export default function* rootSaga() {
    yield* takeEvery(HELLO, helloAction);
}
