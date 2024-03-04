import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewQuestPage from '../NewQuestPage/NewQuestPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {

  const [user, setUser] = useState({});

  return (
    <main className='App'>
      { user ? 
      <>
        <NavBar />
        <Routes>
          <Route path='/quests/new' element={ <NewQuestPage /> }/>
        </Routes>
      </>
        :
        <AuthPage />
      }
    </main>
  )
}
