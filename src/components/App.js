import SearchForm from "./SearchForm/searchForm";
import Header from "./Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header>
            <UserInfo />
          </Header>
          <SearchForm />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
