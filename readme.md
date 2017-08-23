# React application skeleton
## copy
```
git clone https://github.com/pppiroto/react_get_start.git
npm install
npm run watch
npm run start
```
## React Router
https://reacttraining.com/react-router/
https://www.npmjs.com/package/react-router-dom
```
npm install --save react-router-dom
```
## Redux
```
npm install --save redux react-redux redux-actions redux-logger redux-saga
```
# Generator 用
```
npm install --save babel-polyfill
```
### Redux 対応
https://reacttraining.com/react-router/web/guides/redux-integration
```
// before
export default connect(mapStateToProps)(Something)

// after
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```
### Trouble shoot
> Uncaught TypeError: Cannot read property 'route' of undefined

https://stackoverflow.com/questions/43350683/react-router-uncaught-typeerror-cannot-read-property-route-of-undefined

https://blog.wadackel.me/2016/redux-saga-intro/
http://qiita.com/kuy/items/869aeb7b403ea7a8fd8a
http://qiita.com/MegaBlackLabel/items/df868e734d199071b883#_reference-863a1e1485bf47f046e5

## Super Agent
https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
```
npm install superagent
```

## Bootstrap
```
npm install --save react-bootstrap
```
https://react-bootstrap.github.io/getting-started.html

> React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed you have everything you need.
> You can consume the library as CommonJS modules, ES6 modules via Babel, AMD, or as a global JS script.

```
npm install --save-dev bootstrap@3
```
https://getbootstrap.com/
