import React, {useState} from 'react';

import {Provider} from 'react-redux';
import UserSwitch from './src/Navigation/UserSwitch';
import {PersistGate} from 'redux-persist/integration/react';
import persitValue from './src/Redux/store';
import Splash from './src/Page/Splash';

const App = () => {
  const {store, persistor} = persitValue();
  const [splash, setsplash] = useState(true);

  setTimeout(() => {
    setsplash(false);
  }, 3000);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {splash ? <Splash /> : <UserSwitch />}
      </PersistGate>
    </Provider>
  );
};

export default App;
