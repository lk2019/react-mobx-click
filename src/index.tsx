import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react'
import stores from './stores'
ReactDOM.render(
  <Provider {...stores}>
    <App  />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
