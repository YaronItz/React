import './App.css';
import Nav from './Nav';

function App() {
  const firstName="Yaron";
  const lastName="Itzhaki";

  function fullName() {
    return firstName + " " + lastName;
  }

  function ex1(age) {

    if (age < 50)  {
      return <>age below 50</>;
    }
    else if (age <= 100) {
      return <>age in range 50-100</>;
    }
    else {
      return <>age above 100</>;
    }

  }

  function displayNums(num) {
    let elements = [];
    for (let i=0; i < num; i++) {
      elements.push(<button key={i}>{i}</button>);
    }
    return <>{elements}</>;
  }

  return (
    <div>
      Hello World
      <h1>Details</h1>
      <Nav/>
      <p>My Name is {firstName}</p>
      <p>other data ....{fullName()}</p>
      {displayNums(100)}
      <p>{ex1(46)}</p>
      <p>{ex1(66)}</p>
      <p>{ex1(106)}</p>
    </div>
  );
}

export default App;
