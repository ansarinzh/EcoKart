import React from 'react';

import {Provider} from 'react-redux';
import UserSwitch from './src/Navigation/UserSwitch';
import {PersistGate} from 'redux-persist/integration/react';
import persitValue from './src/Redux/store';

const App = () => {
  const {store, persistor} = persitValue();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserSwitch />
      </PersistGate>
    </Provider>
  );
};

export default App;
