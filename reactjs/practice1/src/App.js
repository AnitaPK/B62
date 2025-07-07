import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Greeting from './component/Greeting';

function App() {
  return (
    <>
    <div className='headingOne'>
      Hello React
    </div>
    <Button name=" Register"/>
    <Button name="Login" />
    <Button name="Add to Cart" />
    <Button name="Logout" />
    <Button name="Read more Info" />
<Greeting n1="Harsh" />
<Greeting n1="Darpan" />
<Greeting n1 = "Divya"/>
<Greeting />
<Greeting />

    </>
  );
}

export default App;
