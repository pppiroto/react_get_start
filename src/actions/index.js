import { createAction } from 'redux-actions';

export const HELLO = 'HELLO';
export const HELLO_API = 'HELLO_API';
export const HELLO_API_SUCCESS = 'HELLO_API_SUCCESS';
export const HELLO_API_FAIL = 'HELLO_API_FAIL';

export const helloAction = createAction(HELLO);
export const helloApiAction = createAction(HELLO_API);
export const helloApiSuccessAction = createAction(HELLO_API_SUCCESS);
export const helloApiFailAction = createAction(HELLO_API_FAIL);