import { HELLO } from '../actions';

export default function hello(state="", action) {
    switch (action.type) {
        case HELLO:
            return action.payload + ",hello " + (new Date()).toLocaleTimeString("ja-JP");
        default:
            return state;
    }
}