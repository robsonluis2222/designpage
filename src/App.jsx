import './App.css'
import Chat from './routes/Chat';
import Login from './components/Login/Login';
import { Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Login />
    </div>
  )
}

export default App
