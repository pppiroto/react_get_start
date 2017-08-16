!copy
git clone https://github.com/pppiroto/react_get_start.git

npm install
npm run watch
npm run start

> git branch router master
> git branch
* master
  router
> git checkout router
Switched to branch 'router'
M       dist/bundle.js

!router
https://reacttraining.com/react-router/
https://www.npmjs.com/package/react-router-dom

npm install --save react-router-dom


!Redux
npm install --save redux react-redux redux-actions redux-logger redux-saga
# Generator 用
npm install --save babel-polyfill

https://reacttraining.com/react-router/web/guides/redux-integration
// before
export default connect(mapStateToProps)(Something)

// after
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))

Uncaught TypeError: Cannot read property 'route' of undefined
https://stackoverflow.com/questions/43350683/react-router-uncaught-typeerror-cannot-read-property-route-of-undefined


http://qiita.com/kuy/items/869aeb7b403ea7a8fd8a
http://qiita.com/MegaBlackLabel/items/df868e734d199071b883#_reference-863a1e1485bf47f046e5