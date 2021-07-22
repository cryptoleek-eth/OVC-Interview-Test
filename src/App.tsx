import { Provider } from 'react-redux';
import { store } from './state';

import UserTable from './components/UserTable';
import UserSearch from './components/UserSearch';
import UserPost from './components/UserPost';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <h1>OVC Interview Test</h1>
        <p>For Code Test details checkout <a target="_blank" rel="noopener noreferrer" href="https://github.com/OneviewCommerce/typescript-react-redux-test">Here</a> </p>
        <UserSearch />
        <UserTable  />
        <UserPost />
      </div>
    </Provider>
  );
};

export default App;
