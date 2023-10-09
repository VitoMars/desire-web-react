import './App.css';

// Firebase
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Componenti
import Login from './view/Login';
import Dashboard from './view/Dashboard';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (<Dashboard />) : (<Login />)}
    </div>
  );
}

export default App;
