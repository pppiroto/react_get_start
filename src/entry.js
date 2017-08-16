import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    // http://qiita.com/kuy/items/869aeb7b403ea7a8fd8a
    // Providerコンポーネントは唯一Storeを持つことを許された存在
    // Contextを使ってStateやdispatch関数を配下のContainerコンポーネントで利用可能にします
    // Reduxにおいては connect 関数でReactコンポーネントをラッピングしたものがContainerコンポーネントになります(Connected Component )
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);