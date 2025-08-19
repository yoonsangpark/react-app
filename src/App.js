import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <div>
      <h1><a href="/"> WEB </a></h1>
    </div>
  )
}

function Nav(){
  return(
    <nav>
      <li><a href="/read/1"> html </a></li>
      <li><a href="/read/2"> css </a></li>
      <li><a href="/read/3"> js </a></li>
    </nav>
  )
}

function Article(){
  return (
    <div>
      <h2>Welcome </h2>
      Hello, WEB
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
