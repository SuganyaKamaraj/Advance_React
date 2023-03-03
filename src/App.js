//import logo from './logo.svg';
import './App.css';
import Calculator from './calcapp/containers/Calculator';
import Clock from './calcapp/containers/Clock';
import UseReducerDemo from './components/UseReducerDemo';
import BankApp from './bank/BankApp';
import sagaApp from './sagaapp/sagaApp';
function App() {
  return (
    <div className="App">
      <h1 className='"bg-warning text-danger text-center'>React - Redux Case Study</h1>
    {/* <Calculator/>
    <br/>
    <Clock />
    <br/>
    <UseReducerDemo/> */}
    {/* <BankApp /> */}
    <sagaApp />
    </div>
  );
}

export default App;
