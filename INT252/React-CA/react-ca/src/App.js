import logo from './logo.svg';
import './App.css';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import WindowSizeComponent from './components/CustomHookImplementation';

function App() {
  return (
    <div className="App">
      <p>---------Start-----------</p>
      <QuestionOne></QuestionOne>
      <p>---------End-----------</p>
      <br></br>
      <p>---------Start-----------</p>
      <QuestionTwo></QuestionTwo>
      <p>---------End-----------</p>
      <br></br>
      <WindowSizeComponent></WindowSizeComponent>
    </div>
  );
}

export default App;
