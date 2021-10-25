import './App.scss'
import Form from './Components/Form/Form';
import IllustrationBox from './Components/IllustrationBox/IllustrationBox';
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage>
        <Form/>
        <IllustrationBox/>
      </LoginPage>
    </div>
  );
}

export default App;
