import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';
import QuizPage from '../pages/QuizPage';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/quiz' element={<QuizPage />} />
    </Routes>
  )
}

export default Router