import React from 'react';

import {Provider} from 'react-redux';
import UserSwitch from './src/Navigation/UserSwitch';

import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserSwitch />
    </Provider>
  );
};

export default App;
