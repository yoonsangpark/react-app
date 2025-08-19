import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props){
  console.log("props", props, props.title)
  return (
    <div>
      <h1><a href="/" onClick={(event)=>{
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
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=> {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }

  return(
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <div>
      <h2> {props.title} </h2>
      Hello, {props.body}
    </div>
  )
}

function App() {

  //const _mode = useState('WELCOME');
  //const mode = _mode[0];
  //const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', javascript:'html is...'}
  ]

  let content = null;
  if( mode === 'WELCOME') {
    content = <Article title='Welcome'></Article>
  } else if(mode ==='READ') {
    let title, body = null;
    for(let i=0; i < topics.length; i++){
      //console.log( topics[i].id, id)
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div className="App">
      <Header title="React" onChangeMode={()=>{
        //alert('Header');
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=> {
        //alert(id);
        setMode('READ')
        setId(_id)
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
