import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(()=>{
    // /localhost:8080/api/time GET
    axios.get('/api/time')
    .then(respose => {
      setCurrentTime(respose.data);
    })
    .catch(error => {
      console.log('API 호출 중 오류 발생', error);
    })
  })

  return (
    <div className="App">
      <h1>현재 시간 </h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default App;
