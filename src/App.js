import './App.css';
import Content from './Content';
import Todo from './ToDo';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState('Show');

  return (
    <div className="App">
      <button 
        onClick={() => {
          setShow(!show);
          setShowTitle(show ? 'Show' : 'Hide');
        }}
      >{showTitle}</button>

{/*       {show &&<Content />} */}
      {show &&<Todo />} 
    </div>
  );
}

export default App;
