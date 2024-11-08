import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ExamList from "../components/Exam/ExamList";
import ExamTaking from "../components/Exam/ExamTaking";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ExamResult from "../components/Exam/ExamResult";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/exams',
          element: <ExamList />,
        },
        {
          path: '/exam/:examId',
          element: <ExamTaking />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/exam-result',
          element: <ExamResult />,
        },
      ],
    },
  ]);
