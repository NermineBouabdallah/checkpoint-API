import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          
          console.log(response)
          setUser(response.data);
        })
        .catch(function (error) {
         
          console.log(error);
          setError(error);
        })
  }, []);
  

  return (
    <div className="App">
      <h1 className="text"> API UserList</h1>
      {<UserList user={user}/>}
      
    </div>
  );
}

export default App;
