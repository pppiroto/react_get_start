import { HELLO, HELLO_API, HELLO_API_SUCCESS, HELLO_API_FAIL } from '../actions';

export default function hello(state="", action) {
    var suffix = " " + (new Date()).toLocaleTimeString("ja-JP");
    switch (action.type) {
        case HELLO:
            return action.payload + ",hello" + suffix;
        case HELLO_API_SUCCESS:
            return action.payload.message + suffix;
        case HELLO_API_FAIL:
            return action.payload.toString() + suffix;
        default:
            return state;
    }
}