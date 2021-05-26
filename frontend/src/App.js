import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Wall from './components/wall';

const App = (props)=>{
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =()=>{
        const newComment={
        }
        props.addNewComment(newComment);
        setText('');
    }

    return(
        <div>
          <Wall />
        </div>
    )
}

export default App;
