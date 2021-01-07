import SearchForm from './SearchForm/SearchForm';
import Header from './Header/Header';
import UserInfo from './UserInfo/UserInfo';
import { BrowserRouter } from 'react-router-dom';
import LoginView from './View/LoginView/LoginView';
import RegistrationView from './View/RegistrationView/RegistrationView';
import HomeView from './View/HomeView/HomeView';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header>
            <UserInfo />
          </Header>
          {/* <SearchForm /> */}
          <HomeView/>
          <LoginView />
          <RegistrationView />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
