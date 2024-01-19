import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetchApi()
  }, [])
  const fetchApi = async () => {
    const res = axios.get('http://localhost:3001/api/product/get-all')
    console.log(res.data);
  }
  return (
    <h1>okok</h1>
  );
}

export default App;
