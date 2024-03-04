import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewQuestPage from '../NewQuestPage/NewQuestPage';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {

  const [user, setUser] = useState({});

  return (
    <main className='App'>
      { user ? 
        <Routes>
          <Route path='/quests/new' element={ <NewQuestPage /> }/>
        </Routes>
        :
        <AuthPage />
      }
    </main>
  )
}
