import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log("props", props, props.title)
  return (
    <div>
      <h1><a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}> {props.title} </a></h1>
    </div>
  )
}

function Nav(props){
  const lis = []
  for(let i=0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  return(
    <nav>
      <ol>
        {lis}
      </ol>
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

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', javascript:'html is...'}
  ]

  return (
    <div className="App">
      <Header title="React" onChangeMode={function(){
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
